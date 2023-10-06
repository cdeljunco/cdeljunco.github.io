import { html } from 'lit-html';

const about = (html`
    <div class="page page--about" name="about">
        <div class="card">
            <h2 class="title card__title card__title--about">About</h2>
            <img src="files/me.jpg" alt="Clara del Junco" class="portrait onMobile"> 
            <p class="card__body card__body--about">
 
	I am a science librarian currently pursuing a Masters of Information in Library and Information Science at the University of Toronto. </p>           
	    <p class="card__body card__body--about">

               As a practicing librarian, my current interests lie in critical teaching methods for STEM librarianship; equitable models of open access scholarly publishing; and any kind of data analysis that keeps me connected with my computational roots (bibliometrics, collections analysis, etc.). As a researcher, I am broadly interested in power & politics in academic knowledge production and scholarly communication, especially in the natural sciences.</p>

<p class="card__body card__body--about"> 
From 2021-23 I was the STEM and Data Education Librarian at Wesleyan University. I trained as a computational chemist and physicist with <a class="card__body__link card__body__link--about" href="http://vaikuntanathan-group.uchicago.edu/" target="_blank">Suri Vaikuntanathan</a> (2014-20), and did a postdoc in sociology with the <a class="card__body__link card__body__link--about" href="https://www.knowledgelab.org/" target="_blank">Knowledge Lab</a> (2020-21), both at the University of Chicago.</p>

<p class="card__body card__body--about"> 
A small selection of my interests: techno music, labor organizing in higher education, swimming in lakes, anything cooperative, good nails, cycling, and cooking. Check the <a class="card__body__link card__body__link--about" href="#links" target="_blank">links</a> page for some non-academic things I've written/edited/made.
</p>
<p class="card__body card__body--about">
This website was inspired by <a class="card__body__link card__body__link--about" href="https://www.brutalistwebsites.com/" target="_blank">brutalist web design</a>, especially <a class="card__body__link card__body__link--about" href="https://crevv.com/" target="_blank">crevv.com</a>, and built and designed by my friend  <a class="card__body__link card__body__link--about" href="https://www.hanna-jones.com/projects" target="_blank">Hanna Jones</a>, fellow techno enthusiast and web developer.
</p>
            <div class="contact onMobile">
                <div class="contact__item">
                    <img class="contact__icon" src="./public/assets/images/mail.svg" alt="email icon">
                    <a class="contact__link" href="mailto:caydj@posteo.net">Email</a>
                </div>
               <!-- <div class="contact__item"> -->
                <!--   <img class="contact__icon" src="./public/assets/images/file-text.svg" alt="email icon"> -->
                <!--    <a class="contact__link" href="./files/cv-cdj.pdf" download target="_blank">CV</a> -->
            </div>
        </div>
    </div>
`);

export default about;
