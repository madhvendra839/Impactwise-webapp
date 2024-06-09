import './login.css';
import { useAuth0 } from "@auth0/auth0-react";





function Login (){

    const { loginWithRedirect } = useAuth0();
    return(
        <>
        
        <div className="responsive-container-block bigContainer">
  <div className="responsive-container-block Container">
    <img className="mainImg" src="https://impactwise.000webhostapp.com/static/media/impactwise%20logo%202000.1201a2e5a8c65be1e9f7.png"/>
    <div className="allText aboveText">
      <p className="text-blk headingText">
        Impactwise
      </p><br /> <br />
      <p className="text-blk subHeadingText">
        A News application
      </p><br /> <hr />
      <p className="text-blk description">
      ImpactWise is a news aggregation app that curates and personalizes news from diverse, credible sources. It addresses information overload by delivering timely, relevant, and balanced news, enhancing user engagement through customized feeds and fostering trust by prioritizing reputable content.
      </p><br />  <br /><br />
      <button  className='explore' onClick={() => loginWithRedirect("http://localhost:3000/app")}>Log In</button>
    </div>
  </div>
  
</div>
        </>
    );
}
export default Login;