import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import s from '../assets/mystyles.css';

class Crispr extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s1">
                    </div>

                    <div className="col s11">
                        <h3> SC-462 : Elements of Synthetic Biology</h3>

                        <h3>Prof Manish K. Gupta</h3>

                    </div>

                </div>


                <hr color="#665451" />
                <div className="row">
                    <div className="col s3">
                    </div>
                    <div className="col s9">
                        <h4 id="no_h4"> CRISPR & HIV </h4>
                        <ol id="table_effects">
                            <li>Samarth Kothari :- 201401004</li>
                            <li>Yash Kumar :- 201401038</li>
                            <li>Shreyas bhanderi :- 201401049</li>
                            <li>Sanket Udgirkar :- 201401054</li>
                        </ol>
                    </div>
                </div>

                <div>
                    <h4>Introduction</h4>
                    <p>
                        The virus that causes AIDS is a productive and shrewd retrovirus. When HIV embeds its
DNA into the genome of its host cells, it has a long brooding period, and can stay dormant
and covered up for a considerable length of time. And keeping in mind that doctors can
blend a mixed drink from an assortment of antiretroviral medications to hold it under con-
trol, the infection can reactivate if treatment is halted.
                    </p>
                    <p>
                        While trying to render idle HIV totally safe, Some analysts are utilizing Recently a few
quality altering advances created are being investigated for their potential utility in giving
new and remarkable medicines to HIV. One of these advances is the clusteres regularly inter-
spaced short palindromic repeats (CRISPR)/CRISPR-related (Cas)9 system. This system
is being investigated for its utility against host qualities imperative to HIV disease, to be
specific the HIV coreceptor CCR5, and for extraction of the incorporated genome from con-
taminated cells by focusing on chose qualities or genomic locales, particularly the HIV-1
promoter or long terminal repeat (LTR). One of the real obstacles with the advancement
of this innovation for use in patients is characterizing the LTR succession range inside the
viral quasispecies exhibit in the incorporated infection and how that impacts the quantity
of guide RNAs (gRNAs) required to totally extract all proviral genomes. In this review,
the Drexel Medicine CNS AIDS Research and Eradication Study (CARES) Cohort was used
to exhibit that the prevalent grouping of the incorporated proviral LTR inside the PBMC
compartment demonstrates a reduction in the measure of variety every year paying little
respect to the sort of treatment. Dominating HIV-1 LTR succession experiences proceeded
with genetic change regarding the overwhelming genotype in these cells for no less than 6
years while on compelling suppressive ART. Utilizing Next Generation sequencing (NGS),
to show that 4 of the 8 understanding examples analyzed could have a total gRNA regimen
intended to focus on all known quasispecies, and length of HAART treatment may diminish
the quantity of gRNA required to annihilate provirus as shwon by NGS and gRNA plan for
longitudinal specimens of patient A0017 in the CARES cohort. By and large, these reviews
show the attainability of tending to no less than one of the major mechanical difficulties of
CRISPR/Cas9-mediated HIV-1 proviral genome destruction including the viable focusing of
all viral quasispecies in a given patient sample.
                    </p>
                    <h4>Motivation</h4>
                    <p>
                        As indicated by the 2013 worldwide report from the Joint United Nations Program on
HIV/AIDS (UNAIDS), 35.3 million individuals worldwide are infected with HIV-1 notwith-
standing preventive and remedial measures. Moreover, commodities and auxiliary elements,
for example, medications of manhandle, resistance of medication treatment regimen, and
evolving HIV viral quasispecies (vQS) complicate a cure. Patients who stick to an highly
active antiretroviral therapy (HAART) regimen ordinarily keep up low or imperceptible viral
loads alongside a close ordinary CD4+ T-cell population. At first it was conjectured that
patients staying on HAART for extended periods would in the end be cured. In any case, not
long after the achievement of HAART was acknowledged, repositories of idle contaminated
cells were found. These concealed cells deliver insignificant levels of viral protein and in this
way stay away from both viral cytopathic impacts and host immune clearance. The most
conspicuous inactively contaminated cell pool is thought to be the resting CD4+ memory
T-cell compartment. Be that as it may, it depends upon which end-organ one is refering to,
for example, the CNS, microglia and macrophages are likely the essential viral maker and
reservoir. What’s more, these reservoirs, especially the CNS, are thought to be built up soon
after the underlying period of contamination. The progression in respect to the foundation
of viral inertness and repositories has been previously reviewed in depth.
                    </p>
                    <p>
                        The resting CD4+ memory T-cell population holds the ability to create infectious virus
particles upon incitement or suspension of HAART and thus are a major obstruction to
accomplishing a HIV cure and this remaining parts the case even after pprolonged period
of treatment. Current endeavors to destroy HIV-1 from the resting CD4+ memory T-cell
populace fundamentally concentrate on a ”shock and kill” technique where mixes are used to
initiate reactivation of infection from this cell population, using mixes, for example, histone
deacetylase inhibitors (HDAC) inhibitors and protein kinase C (PKC) inhibitors to enable
the host resistant reaction to perceive and focus on these contaminated cells. However a few
confinements have been acknowledged in this kind of helpful approach including:<br />
(i) There is a huge division of non-utilitarian genomes inside this idle store and in this way
not all incorporated provirus can create replication skilled infection. Fundamentally desert-
ing coordinated HIV that may in any case have the capacity to deliver viral proteins or
different segments of the infection that could at present have advere effect.
(ii) The general number of CD4+ T cells reactivated from the resting CD4+ T-cell HIV-1
reservoir, as determined by viral outgrowth assays, has been evaluated as being orders of
magnitude smalller than the quantity of contaminated cells recognizable by PCR-based tests,
suggesting that not all cells inside this repository are being reactivated.<br />
(iii) The observation that the CTL immune response is not sufficiently strong to take out
infected cells taking after reactivation. Besides, the ”shock and kill” technique maybe less
successful in cells of the monocytic lineage in view of intrinsic contrasts in their physiology,
especially their inborn resistance to cytopathic impacts of HIV-1 and their terminally differ-
entiated state that requires interesting therapeutics, for example, PI3K/Akt inhibitors and
other.
                    </p>
                    <p>
                        Given these perceptions, one of the ebb and flow inquire about goals has been to discover
novel ways to deal with decrease the extent of the inactively contaminated cell populace
that don’t require actuation of HIV quality expression or reactivation of viral production.
To date, four quality altering procedures have been inspected regarding HIV eradication
efforts and includes zinc finger nucleases (ZFN), transcription activator-like effector nucle-
ases (TALENs), piggyback, and clustered regularly interspaced short palindromic repeats
(CRISPR)/CRISPR-related (Cas)9 system.
                    </p>
                    <p>
                        As of late the CRISPR/Cas9 framework has been appeared to have wide utility in genome
editing in yeast, Drosophila, human and mouse cell lines, and in zebrafish, mice, and C. ele-
gans annimal models. As for the utilization of this innovation in the setting of HIV disease,
a few lines of research have been proposed including:<br />
(i)  Disrupting HIV-1 entry coreceptors (CCR5, CXCR4) and proviral DNA-encoding viral
proteins. CCR5 gene targetting on ZFNs are in stage II clinical trials for HIV/AIDS treat-
ment.<br />
(ii)Designing resistant cells by earlier immunization with this sort of remedial approach.<br />
(iii)prospects of specifically erasing HIV proviral DNA incorporated into the host genome.<br />
(iv)  Removing the proviral HIV-1 genome from host cell DNA, by focusing on its exceptionally-
conserver 5’ and 3’ long terminal repeats (LTRs).<br />
(v) focusing on particular cis-acting components inside the LTR.
Recntly these ideas and consolidated methodologies were utilized to distinguish HIV-1 tar-
gets while barring host off-target impacts to achieve the extraction of a LTR section of the
proviral DNA from inactively infected T cells and a 9.7 kb fragment from microglial and
promonocytic cells with no recognized off-target impacts and preention of HIV-1 disease
using the Cas9 system. These reviews have unmistakably indicated incredible guarantee for
other cell sorts utilizing this system.
                    </p>
                    <p>
                        Be that as it may, the CRISPR/Cas9 system is not without its complication. The frame-
work requires the plan of a regimen of guide RNAs (gRNAs) that are indistinguishable to
the 5’ and 3’ end of the desired extraction site. To decrease off-target impacts, these can’t
be homologous to the host genome; this is non-trivial because of HIV’s closeness to numer-
ous human endogenous retroviruses (HERVs). Moreover, HIV’s high mutability along with
inter- and intra-ppatient variability make this a confounded issue. Furthermore, focusing of
the viral promoter or LTR includes transcription factor binding sites that are like the ones
present in human promoters.
                    </p>

                </div>
                <div className="row">
                    <div className="col s2">
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src="assets/crispr.jpg" width="30%" height="170px" />
                            </div>
                            <div className="card-content">
                                <p id="no_effect">The first description of what would later be called CRISPR was from Osaka University
researcher Yoshizumi Ishino in 1987.....</p>
                            </div>
                            <div className="card-action">
                                <a href="https://sanket-224.github.io/CRISPR-and-HIV/#/introduction_to_crispr">Introduction To CRISPR</a>

                            </div>
                        </div>
                    </div>
                    <div className="col s1">
                    </div>

                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src="assets/hiv.jpg" width="30%" height="30%" />
                                {/*}    <span className="card-title">Card Title</span> */}
                            </div>
                            <div className="card-content">
                                <p id="no_effect">HIV is virus whose
infection causes the immune system of human body to become weak and over the time
acquire AIDS....</p>
                            </div>
                            <div className="card-action">
                                <a href="https://sanket-224.github.io/CRISPR-and-HIV/#/introduction_to_hiv">Introduction To HIV</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s2">
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src="assets/sol1.jpg" width="30%" height="30%" />

                            </div>
                            <div className="card-content">
                                <p id="no_effect"> Using the much famous CRISPR/CAS9 gene editing technique, scientist have shown that
they can edit HIV gene sequence...</p>
                            </div>
                            <div className="card-action">
                                <a href="https://sanket-224.github.io/CRISPR-and-HIV/#/solution1">CRISPR - Solution 1</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s1">
                    </div>

                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src="assets/receptor2.png" width="30%" height="30%" />

                            </div>
                            <div className="card-content">
                                <p id="no_effect">This solution comes from the understanding of how HIV interacts with our cells. HIV, sim-
ilarly to other viruse...</p>
                            </div>
                            <div className="card-action">
                                <a href="https://sanket-224.github.io/CRISPR-and-HIV/#/solution2">CRISPR - Solution 2</a>
                            </div>
                        </div>
                    </div>
                </div>

                <p>
                    <h4 id="no_h4"> References </h4>
                        <ol>
                            <li>The evolving genetics of hiv, 2005.</li>
                            <li>Inhibition of hiv-1 infection of primary cd4+ t-cells by gene editing of ccr5 using
adenovirus-delivered crispr/cas9, 2015.</li>
                            <li>Andrew Gibiansky. Crispr gene editing, 2015.</li>
                            <li>Gil Amitai Rotem Sorek. The three stages of crispr–cas immunity., 6.</li>
                        </ol>
                </p>
            </div >


        );
    }
}


module.exports = Crispr;
