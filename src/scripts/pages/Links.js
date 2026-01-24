import { html } from 'https://cdn.jsdelivr.net/npm/lit-html@3.3.2/lit-html.min.js';

const links = (html`
    <div class="page page--links" name="links">
        <div class="card">
            <h2 class="title card__title">Links</h2>
            <div class="card__section">
                <p class="card__body card__body--links">
                   <a class="card__body__link" href="https://drive.google.com/file/d/1yqyZdaEDH9HQ98qkpcE-cA_eK7dMKwtY/view" target="_blank">Rave Ethics Zine</a>: Fun, safety, and ethical behavior -- the 3 rules of the rave. I contributed to this zine that was edited by my dear friend Char Hilgers. 
                </p>
		</div>
	     <div class="card__section">
                <p class="card__body card__body--links">
                   <a class="card__body__link" href="http://futureethics.net/" target="_blank">Future Ethics</a>: A label and zine born of Rave Ethics, run by my friends Char Hilgers and Bee Hill. I made the website and Char maintains it.
                </p>            
	   </div>
            <div class="card__section">
                <p class="card__body card__body--links">
                   <a class="card__body__link" href="http://dx.doi.org/10.6082/uchicago.2773" target="_blank">Burnout</a>: A collection of visual and written reflections on academia, travel, and climate change, by some amazing friends, colleagues, roommates, comrades, and one stranger from the internet. Edited with <a class="card__body__link" href="https://mgerbelli.github.io/website/" target="_blank">Mathilde Gerbelli-Gauthier</a>.
                </p>
	   </div>
	    <div class="card__section">
                <p class="card__body card__body--links">
                   <a class="card__body__link" href="https://www.insidehighered.com/views/2022/04/05/raise-racist-scientific-history-science-papers-opinion" target="_blank">A Weighty Footnote</a>: I wrote this piece for Inside Higher Ed in reaction to an experience I had trying to include historical context in a physics paper. In it, I argue that history and politics belong in science papers.                
		   </p>
	   </div>

        </div>
    </div>
`);

export default links;
