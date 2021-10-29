import { html } from 'lit-html';

const links = (html`
    <div class="page page--links" name="links">
        <div class="card">
            <h2 class="title card__title">Links</h2>
            <div class="card__section">
                <p class="card__body card__body--links">
                   <a class="card__body__link" href="https://drive.google.com/file/d/1yqyZdaEDH9HQ98qkpcE-cA_eK7dMKwtY/view" target="_blank">Rave Ethics Zine</a>: Fun, safety, and ethical behavior -- the 3 rules of the rave. Send me an email if you can guess which part I contributed.
                </p>
		</div>
	     <div class="card__section">
                <p class="card__body card__body--links">
                   <a class="card__body__link" href="http://futureethics.net/" target="_blank">Future Ethics</a>: A label and zine born of Rave Ethics, run by my friends Catherine Hilgers (aka Ursula Xanadu) and Bee Hill. I made the website and Catherine maintains it.
                </p>            
	   </div>
            <div class="card__section">
                <p class="card__body card__body--links">
                   <a class="card__body__link" href="http://dx.doi.org/10.6082/uchicago.2773" target="_blank">Burnout</a>: A collection of visual and written reflections on academia, travel, and climate change, edited by me and Mathilde Gerbelli-Gauthier.
                </p>
	   </div>
        </div>
    </div>
`);

export default links;
