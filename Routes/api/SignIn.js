const User = require('../../Models/User')
const UserSession = require('../../Models/UserSession')
 

module.exports = (app) => {

app.post('/api/account/signup', (req,res,next)=> {
    const { body } = req;
    const {
        userName,
        password
    } = body;

    if (!userName) {
        return res.send({
            success: false,
            message: 'Username cannot ne blank'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Password cannot ne blank'
        });
    }
    User.find({
        userName: userName
    }, (err, previousUsers) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Server Error'
            })
        } else if (previousUsers.length > 0) {
            return res.send({
                success: false,
                message: 'Error: Account Exists'
            });
        } 

        //Save user
        const newUser = new User();
        
        newUser.userName = userName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
                return res.send({
                    success: true,
                    message: 'Success'
                });
            }
        })
    })

});

    app.post('/api/account/signin', (req,res,next)=> {
        const { body } = req;
        const {
            userName,
            password
        } = body;

        if (!userName) {
            return res.send({
                success: false,
                message: 'Username cannot be blank'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Password cannot be blank'
            });
        }


        User.find({
            userName: userName
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Username not found'
                });
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
            });
        }

        // Correct user
        const userSession = new userSession();
        userSession.userId = user._id; 
        userSession.save((err, doc) => { 
            if (err) {
              return res.send({
                success:false,
                message: 'Error: Server error'
            });
        }

        return res.send({
            success: true,
            message: 'Success',
            token: doc._id
        });

    });

        });
    });
}
