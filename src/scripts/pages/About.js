import { html } from 'lit-html';

const about = (html`
    <div class="page page--about" name="about">
        <div class="card">
            <h2 class="title card__title card__title--about">About</h2>
            <img src="https://clara-photos.s3.amazonaws.com/clara.JPG" alt="Clara del Junco" class="portrait onMobile">  
            <p class="card__body card__body--about">
                I am a PhD candidate in the department of chemistry at the University of Chicago working with <a class="card__body__link card__body__link--about" href="http://vaikuntanathan-group.uchicago.edu/" target="_blank">Suri Vaikuntanathan</a>. I use statistical mechanics to understand how energy consumption controls the properties of non-equilibrium materials and processes, especially in biophysics.</p>

<p class="card__body card__body--about"> 
I am originally from Toronto, Canada, and have also lived in Montreal and the Netherlands. I speak English and French fluently, and some conversational Dutch. My last name is Spanish and is pronounced "del hoong-ko". Apart from my research, my recent interests/activities include: swimming at Promontory Point; organizing graduate student workers; reading poetry, fiction, history, feminist/political/critical theory, and science and technology studies; research and personal data management; dancing to techno and other electronic music (I contributed to the  <a class="card__body__link card__body__link--about" href="https://www.dropbox.com/s/x4kqcltm4vgo63y/Rave%20Ethics.pdf" target="_blank">rave ethics zine</a> and built the website for the <a class="card__body__link card__body__link--about" href="http://futureethics.net" target="_blank">future ethics</a> label); and experimenting with fermented foods. 
</p>

<p class="card__body card__body--about">
This webste was inspired by <a class="card__body__link card__body__link--about" href="https://www.brutalistwebsites.com/" target="_blank">brutalist web design</a>, especially <a class="card__body__link card__body__link--about" href="https://crevv.com/" target="_blank">crevv.com</a>, and built and designed by my friend  <a class="card__body__link card__body__link--about" href="https://www.hanna-jones.com/projects" target="_blank">Hanna Jones</a>, fellow techno enthusiast and web developer.
</p>



            <div class="contact onMobile">
                <div class="contact__item">
                    <img class="contact__icon" src="./public/assets/images/mail.svg" alt="email icon">
                    <a class="contact__link" href="mailto:clara.deljunco@posteo.net">Email</a>
                </div>
                <div class="contact__item">
                    <img class="contact__icon" src="./public/assets/images/file-text.svg" alt="email icon">
                    <a class="contact__link" href="https://clara-photos.s3.amazonaws.com/ClaradelJunco.pdf" download target="_blank">CV</a>
                </div>
                <div class="contact__item">
                    <img class="contact__icon" src="./public/assets/images/book-open.svg" alt="book icon">
                    <a class="contact__link" href="https://scholar.google.com/citations?user=NyQ4unsAAAAJ&hl=en" target="_blank">Google Scholar</a>
                </div>
                <div class="contact__item">
                    <img class="contact__icon" src="./public/assets/images/link.svg" alt="link icon">
                    <a class="contact__link" href="http://vaikuntanathan-group.uchicago.edu/" target="_blank">Vaikuntanathan Group</a>
                </div>
            </div>
        </div>
    </div>
`);

export default about;
