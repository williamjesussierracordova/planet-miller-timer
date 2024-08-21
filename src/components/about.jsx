import Header from "./Header";
import Footer from "./Footer"
import { useTranslation } from 'react-i18next';
import miller from "../../public/assets/miller.webp"
import interstellar from "../../public/assets/interstellar.webp"

const About = () => {
    const { t } = useTranslation();

    return (
       <div className="about">
            <Header />
            <div className="about_content">
                <div className="ab_tittle">
                    <h2>{t('about:tittle')}</h2>
                </div>
                <div className="ab_paragraph">
                    <pre>
                        {t("about:t1p1")}
                        <br/>
                        <br/>
                        {t("about:t1p2")}
                        <br/>
                        {t("about:t1p3")}
                        <br/>
                        {t("about:t1p4")}
                        <br/>
                        {t("about:t1p5")}
                        <br/>
                        <br/>
                        {t("about:t1p6")}
                    </pre>
                </div>
                <div className="ab_image">
                    <img src={miller} style={{width:'50%'}}></img>
                </div>
                <div className="ab_subtittle">
                    <h2>{t('about:subtittle1')}</h2>
                </div>
                <div className="ab_paragraph">
                    <pre>{t("about:s1p1")}</pre>
                </div>
                <div className="ab_video">
                    <iframe width="693" height="390" src="https://www.youtube.com/embed/JqKa6qyVYgg" title="The Science of Extreme Time Dilation in Interstellar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="ab_subtittle">
                    <h2>{t('about:subtittle2')}</h2>
                </div>
                <div className="ab_paragraph">
                    <pre>{t("about:s2p1")}</pre>
                    <pre>{t("about:s2p2")}</pre>
                </div>
                <div className="ab_image">
                    <img src={interstellar} style={{width:'50%'}}></img>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;