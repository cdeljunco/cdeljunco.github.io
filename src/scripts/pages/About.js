import { html } from 'lit-html';

const about = (html`
    <div class="page page--about" name="about">
        <div class="card">
            <h2 class="title card__title card__title--about">About</h2>
            <img src="files/me.jpg" alt="Clara del Junco" class="portrait onMobile"> 
            <p class="card__body card__body--about">

            I am the STEM and Data Education Librarian at Wesleyan University in Middletown, CT. I work with students, faculty, and colleagues within and beyond the library to make the science library's digital and physical resources reflect our collective needs and values. I also help students and faculty make the most of those resources. In between, I work on a few research projects in digital humanities and the sociology of knowledge production.   
            
	    <p class="card__body card__body--about">
               Before becoming a librarian I did my PhD in chemistry with <a class="card__body__link card__body__link--about" href="http://vaikuntanathan-group.uchicago.edu/" target="_blank">Suri Vaikuntanathan</a>, where I used statistical mechanics to understand how energy consumption controls the properties of non-equilibrium materials and processes, especially in biophysics. I then spent a year as a postdoctoral scholar in the <a class="card__body__link card__body__link--about" href="https://www.knowledgelab.org/" target="_blank">Knowledge Lab</a>, where I applied computational methods to large data sets on publication, grant funding, and research teams to study processes of academic knowledge production. <a class="card__body__link card__body__link--about" href="https://scholar.google.com/citations?hl=en&user=NyQ4unsAAAAJ" target="_blank">Google Scholar</a> should have an up-to-date list of my publications.</p>

<p class="card__body card__body--about"> 
I am originally from Toronto, Canada, and have also lived in Chicago, Montreal, and the Netherlands. I speak English and French fluently, and some conversational Dutch. My last name is Spanish and is pronounced "del hoong-ko". A small and random selection of my interests: criterion channel, cooperative living, techno music, graduate student worker organizing, and experimenting with vegan cheese. Check the <a class="card__body__link card__body__link--about" href="#links" target="_blank">links</a> page for some non-academic things I've made.
</p>
<p class="card__body card__body--about">
This website was inspired by <a class="card__body__link card__body__link--about" href="https://www.brutalistwebsites.com/" target="_blank">brutalist web design</a>, especially <a class="card__body__link card__body__link--about" href="https://crevv.com/" target="_blank">crevv.com</a>, and built and designed by my friend  <a class="card__body__link card__body__link--about" href="https://www.hanna-jones.com/projects" target="_blank">Hanna Jones</a>, fellow techno enthusiast and web developer.
</p>
            <div class="contact onMobile">
                <div class="contact__item">
                    <img class="contact__icon" src="./public/assets/images/mail.svg" alt="email icon">
                    <a class="contact__link" href="mailto:clara.deljunco@posteo.net">Email</a>
                </div>
               <!-- <div class="contact__item"> -->
                <!--   <img class="contact__icon" src="./public/assets/images/file-text.svg" alt="email icon"> -->
                <!--    <a class="contact__link" href="./files/cv-cdj.pdf" download target="_blank">CV</a> -->
                <div class="contact__item">
                    <img class="contact__icon" src="./public/assets/images/book-open.svg" alt="book icon">
                    <a class="contact__link" href="https://scholar.google.com/citations?user=NyQ4unsAAAAJ&hl=en" target="_blank">Google Scholar</a>
                </div>
            </div>
        </div>
    </div>
`);

export default about;
