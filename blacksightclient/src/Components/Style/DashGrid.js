import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
//min-height breaks the banner

const G1 = () => (
<Container>
<style>{`
  p {
    align-content: center;
    background-color: #495285;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 6em;
    padding-top: 100px;
  }
  p > span {
    opacity: 0.4;
    text-align: center;
  }
}
`}
</style>

<Grid celled columns={3}>
  <Grid.Row>
    <Grid.Column>
      <p>DASH 1</p> 
    </Grid.Column>
    <Grid.Column>
      <p>DASH 2</p> 
    </Grid.Column>
    <Grid.Column>
      <p>DASH 3</p> 
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column>
      <p>DASH 4</p>
    </Grid.Column>
    <Grid.Column>
      <p>DASH 5</p>
    </Grid.Column>
    <Grid.Column>
      <p>DASH 6</p>
    </Grid.Column>
  </Grid.Row>
</Grid>
</Container>
)

export default G1