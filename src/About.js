import './about.css';
import NavInshorts from './components/NavInshorts';






function About(){
    return(
        <>
        {/* <NavInshorts/> */}
        <div class="responsive-container-blockk bigContainer">
  <div class="responsive-container-blockk Container">
    <div class="responsive-container-blockk leftSide">
      <p class="text-blk heading">
        Meet Our Creative Team
      </p>
      <p class="text-blk subHeading">
        Akanksha, with her expertise in data, unlocks hidden insights to fuel our projects. Yash, a master of building beautiful interfaces, brings them to life with his Flutter magic. Together, they're a dream team!
      </p>
    </div>
    <div class="responsive-container-blockk rightSide">
      <img class="number1img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"/>
      <img class="number2img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"/>
      <img class="number3img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"/>
      <img class="number5img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"/>
      <iframe allowfullscreen="allowfullscreen" class="number4vid" poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png" src="https://www.youtube.com/embed/svg%3E?">
      </iframe>
      <img class="number7img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"/>
      <img class="number6img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"/>
    </div>
  </div>
</div>
        </>
    )
        
    
}
export default About;