import { html } from 'lit-html';

const academics = (html`
    <div class="page page--academics" name="academics">
        <div class="card">
            <h2 class="title card__title">Academics</h2>
            <div class="card__section">
                <h3 class="card__subtitle">Research interests</h3>
                <p class="card__body card__body--academics">
                    Using equilibrium statistical mechanics, we can - in principle - derive macroscopic properties of systems from microscopic interactions. Yet most systems are out of equilibrium, for which no such principle exists. In particular, evolution has produced many incredible nonequilibrium machines and materials: from self-healing materials like muscles, to nanoscale factories that underlie gene expression. Experimentalists can now study these systems with remarkable levels of detail, and are even able to recreate some of their basic functions in synthetic systems. A rigorous physical understanding of how these systems convert energy input to function is essential to make useful biomimetic materials and machines. During my PhD I have studied how energy consumption controls the properties of model
                    systems inspired by two classes of contemporary experiments.
                </p>
                <h4 class="card__subtitle card__subtitle--small">1. Biochemical oscillators</h4>
                <p class="card__body card__body--academics">
                    A biochemical oscillator is a series of non-equilibrium chemical and physical processes that underlie biological clocks such as circadian rhythms. Biochemical oscillators are robust to fluctuations in chemical counts, inputs such as light levels, and other sources of noise, a highly desirable feature that is still poorly understood[1-3]. I consider periodic Markov state models of biochemical oscillators to probe how energy consumption enables this robustness. I obtained analytical expressions for two measures of their time-keeping ability: the coherence and period of oscillations. These are expected to depend on all the details of the rates in the model. However, my calculations revealed that most of these details become irrelevant to these measures when the system is driven strongly out of equilibrium. Energy consumption thus allows the oscillator's function to be robustly maintained and tuned[4]. Moreover, I have shown how we can design the models so that they exhibit "input compensation", the ability to maintain a constant period when rates are affected by changes in input parameters (preprint coming soon). Currently, I am generalizing these results to discover the minimal conditions for a biochemical oscillator to exploit energy consumption to achieve input compensation.
                </p>
                <p class="card__body card__body--academics card__body--footnotes">
                    [1] Paijmans J, Lubensky DK, ten Wolde PR (2017) Period Robustness and Entrainability of the Kai System to Changing Nucleotide Concentrations. Biophys J 113(1):157–173.
                </p>
                <p class="card__body card__body--academics card__body--footnotes">
                    [2] Lin J, Chew J, Chockanathan U, Rust MJ (2014) Mixtures of opposing phosphorylations within hexamers precisely time feedback in the cyanobacterial circadian clock. Proc Natl Acad Sci U S A 111(37):E3937-45.
                </p>
                <p class="card__body card__body--academics card__body--footnotes">
                    [3] Johnson CH, Egli M (2014) Metabolic compensation and circadian resilience in prokaryotic cyanobacteria. Annu Rev Biochem 83:221–47.
                </p>
                <p class="card__body card__body--academics card__body--footnotes">
                    [4] del Junco C, Vaikuntanathan S (2018) High chemical affinity increases the robustness of biochemical oscillations. <a class="card__body__link" href="http://arxiv.org/abs/1808.04914" target="_blank">http://arxiv.org/abs/1808.04914</a>
                </p>
                <figure class="figure">
                    <img class="figure__image" src="https://clara-photos.s3.amazonaws.com/boFig.png" alt="bo-fig">
                    <figcaption class="figure__caption">
                    (a) Biochemical oscillators undergo limit cycles in a high-dimensional phase space of molecule counts[1]. (b) I model oscillators by projecting down the average limit cycle on to a Markov state model. (c) Analytical expressions accurately predict the values of the period and coherence of the oscillations in models with randomly assigned rates. The derivation predicts that these values are insensitive to fluctuations in the rates when the driving force is high. Numerics confirm that, as a consequence, the time scales of oscillators with random rates become more tightly distributed, and therefore more robust, at high driving. (d) To include fluctuations about the average limit cycle, I add small secondary cycles to the Markov model. The time scales can also be analytically predicted in this model. (e) When the rates are correctly tuned in the multicyclic network in (d), the oscillator can compensate for changes in the driving force and keep a constant period.
                    </figcaption>
                </figure>
                <h4 class="card__subtitle card__subtitle--small">2. Active colloids</h4>
                <p class="card__body card__body card__body--academics">
                    This model is inspired by experiments on colloids, which act as a fluid of hard spheres in equilibrium. When exposed to a rotating magnetic field, however, they spontaneously break symmetry and sort themselves according to chirality[5]. A whole phase diagram thus emerges from a single point in the equilibrium phase space. This phenomenology could be exploited to achieve reversible self-assembly without having to modify the chemistry of the system, if we can understand how driving the system out of equilibrium modifies the collective properties of the particles. Combining molecular dynamics simulations with analytical theory, I quantified how the work performed on the system by the driving forces leads to phase separation[6]. I used an equilibrium framework called capillary wave theory as a reference to quantify how interfaces in the phase-separated state are modified by driving, revealing that it can increase the surface tension - a quantity that drives self-assembly - by a factor of two[7]. These results show how energy dissipation can be used to tune the material properties of this system.
                </p>
                <p class="card__body card__body--academics card__body--footnotes">
                    [5] Han M, Yan J, Granick S, Luijten E (2017) Effective temperature concept evaluated in an active colloid mixture. Proc Natl Acad Sci U S A 114(29):7513–7518.
                </p>
                <p class="card__body card__body--academics card__body--footnotes">
                    [6] del Junco C, Tociu L, Vaikuntanathan S (2018) Energy dissipation and fluctuations in a driven liquid. Proc Natl Acad Sci U S A 115(14):3569–3574.
                </p>
                <p class="card__body card__body--academics card__body--footnotes">
                    [7] del Junco C, Vaikuntanathan S (2019) Interface height fluctuations and surface tension of driven liquids with time-dependent dynamics. J Chem Phys 150(9):094708.
                </p>
                <figure class="figure">
                    <img class="figure__image" src="https://clara-photos.s3.amazonaws.com/rbFig.png" alt="rb-fig">
                    <figcaption class="figure__caption">
                    (a) Magnetic colloids separate according to chirality when exposed to a rotating magnetic field[5]. (b) A minimal model of 2D disks with repulsive Weeks-Chandler Andersen (WCA) interactions reproduces the basic features of the experiment. As the magnitude and period of the rotating driving force is increased, the colloids phase separate and then undergo a reentrant transition. (c) A whole phase diagram emerges from a single point in the equilibrium phase space of the particles. The work done on
                    the red particles by the driving forces changes their diffusion constant, causing the system to separate in to regions of like-colored particles.
                    </figcaption>
                </figure>
            </div>
            <div class="card__section">
                <h3 class="card__subtitle">Publications</h3>
                <p class="card__body card__body--academics">
                    del Junco C, Vaikuntanathan S (2018) <cite>High chemical affinity increases the robustness of biochemical oscillations.</cite> (under review) <a class="card__body__link" href="https://arxiv.org/abs/1808.04914" target="_blank">arXiv</a>
                </p>
                <p class="card__body card__body--academics">
                    del Junco C, Vaikuntanathan S (2019) <cite>Interface height fluctuations and surface tension of driven liquids with time-dependent dynamics. J Chem Phys 150(9):094708.</cite> <a class="card__body__link" href="https://arxiv.org/abs/1803.02678" target="_blank">arXiv</a> <a class="card__body__link" href="http://aip.scitation.org/doi/10.1063/1.5042251">JCP</a><br/>This paper was chosen as an Editor's Pick and highlighted in <a class="card__body__link" href="https://aip.scitation.org/doi/full/10.1063/1.5097126" target="_blank">Scilight</a>
                </p>
                <p class="card__body card__body--academics">
                    del Junco C, Tociu L, Vaikuntanathan S (2018) Energy dissipation and fluctuations in a driven liquid. Proc Natl Acad Sci U S A 115(14):3569–3574. <a class="card__body__link" href="https://arxiv.org/abs/1611.00635" target="_blank">arXiv</a> <a class="card__body__link" href="https://www.pnas.org/content/115/14/3569.long" target="_blank">PNAS</a>
                </p>
            </div>
        </div>
    </div>
`);

export default academics;