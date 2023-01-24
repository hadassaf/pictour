import "./About.css";
import GitHubButton from 'react-github-btn'


function About(): JSX.Element {
    return (
        <div className="About">
            היי,
            אנחנו חברת pictour שמתמחה בארגון טיולי צילום מושלמים, <br />
            הטיולים הם ללא עלות כפי שגיליתם כבר  <br />
            זה באמת הזוי מצידינו - <br />
            אבל - בשביל שוחרי צילום וטיול שכמותינו <br />
            זה ממש בסדר <br />
            כי בשבילינו החיים הם טיול אחד גדול <br />
            טיול שבורא עולם מסדר לנו <br />
            והתמונה הכי טובה <br />
            היא פשוט לתת <br />
            לתרום מעצמינו לקהילה <br />
            לחבר כל אחד לעצמו ולשמחה שבו <br />
            ואם הדרך שלנו מצאה חן בעינכם <br />
            אנחנו שמחים ומקווים שנתנו לכם <br /> 
            או טיול מושלם <br />
            ואם אתם לא בעניין - אז <br />
             השראה לנתינה בחיים <br /> 
            ואם בא לכם על זה <br />
            אז בואו תתנו כבר כאן <br />
            הוסיפו לי star ב-github <br />
            ותתחילו להרגיש מהי נתינה ---<br /> <br />
            <GitHubButton href="https://github.com/">Star dasif</GitHubButton>

			
        </div>
    );
}

export default About;
