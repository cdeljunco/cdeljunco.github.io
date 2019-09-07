import { html } from 'lit-html';

const about = (html`
    <div class="page page--about" name="about">
        <div class="card">
            <h2 class="title card__title card__title--about">About</h2>
            <img src="https://clara-photos.s3.amazonaws.com/clara.JPG" alt="Clara del Junco" class="portrait onMobile">  
            <p class="card__body card__body--about">
                I am a PhD candidate in the department of chemistry at the University of Chicago working with <a class="card__body__link card__body__link--about" href="http://vaikuntanathan-group.uchicago.edu/" target="_blank">Suri Vaikuntanathan</a> (among other things; see <a class="card__body__link card__body__link--about" href="#activities">Activities</a>). I use statistical mechanics to understand how energy consumption shapes the properties of non-equilibrium materials and processes, especially in biophysics. I am originally from Toronto, Canada. Before moving to Chicago I also lived in Montreal and the Netherlands. I speak English and French fluently, and some conversational Dutch. My last name is Spanish and is pronounced "del hoong-ko".
            </p>
            <div class="contact onMobile">
                <div class="contact__item">
                    <img class="contact__icon" src="./public/assets/images/mail.svg" alt="email icon">
                    <a class="contact__link" href="mailto:clara.deljunco@gmail">clara.deljunco@gmail</a>
                </div>
                <div class="contact__item">
                    <img class="contact__icon" src="./public/assets/images/file-text.svg" alt="email icon">
                    <a class="contact__link" href="https://clara-photos.s3.amazonaws.com/ClaradelJunco.pdf" download target="_blank">Resume / CV</a>
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