import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import s from '../assets/mystyles.css';

class solution2 extends Component {
    render() {
        return (
            <div>
                <h1> CRISPR Solution 2 </h1>
                <hr color="#665451" />
                <br />
                 <div class="video-container" id="noob">
                    <iframe width="700" height="500" src="//www.youtube.com/embed/A98MkcZORFU" frameborder="10" allowfullscreen></iframe>
                </div>
                <div>
                    <p>
                        This solution originates from the comprehension of how HIV communicates with our cells.
HIV, comparably to different viruses, can’t make new duplicates of itself without assistance.
HIV must enter cells and utilize their machinery to imitate and spread all through the body.
However HIV can only enter certain cells. HIV finds the correct cell utilizing extraordinary
proteins called receptors.
                    </p>
                    <p>
                        Receptors sit on the outside of cells to get messages and transmit them into the cell. HIV
takes hold of cells that have a receptor called CD4. Cells with the CD4 receptor are a vital
piece of the body’s immune system. HIV gradually decimates these cells and debilitates the
immune system. (Fig 3).
                    </p>
                    <img src="assets/HIVTcells(1).png"/>
                    <p>
                        <b>Figure 3:</b> The HIV virus attacks T-helper cells, or CD4+ cells, by fitting itself into the cell
like a key in a lock. Once it has invaded, it can use its own RNA as a template to make
copies of itself, multiplying and traveling through the body. This process destroys the body’s
own T cells over time.
                    </p>
                    <p>
                        Things being what they are, just CD4 is insufficient to get infected with HIV. Another protein
called CCR5 is likewise required. CCR is known as a co-receptor since it works with
CD4, is responsible to enable HIV to enter the cell. Numerous prople are impervious to HIV
because of a mutation in the CCR5 quality called CCR5∆32. This CCR5∆32 change brings
about a smaller protein that is no longer on the outside of the cell. Now most types of HIV
is no longer able to infect cells since there is no CCR5 outside of the surface (Fig 4).
                    </p>
                        
                    <p>
                        In spite of the fact that, CCR5 is not the total story of invulnerability to HIV infection. A
few people with no CCR5∆32 mutation have likewise demonstrated resistance. So different
qualities additionally add to backing off of HIV infection.[1]
                    </p>
                    <p>
                     The solution is to repress HIV contamination of CD4+ T-cells by gene editing of CCR5 utilizing
adenovirus-conveyed CRISPR/Cas9. By basic delivery of two fundamental elements,
an enhanced Cas9 protein and a single guided RNA (sgRNA), the CRISPR/Cas9 complex
framed can be modified to focus on any genome. With the specificity is controlled by the
sgRNA that contains a 20 nt guide seqeunce correlative to the target genome. With the
direction of sgRNA, Cas9 protein that is customized, cleaves the focused on DNA at each
strand, which brings about a double-stranded breaks (DSBs) that trigger cell repair mecahnism.
In eukaryotes, the DSBs are all the more usually repaired by the mechanism of
error-prone non-homologous end joining (NHEJ), consequently creating equence changes,
for example inclusions and cancellations (indels).
                    </p>
                    <img src="assets/HIVTcells2(1).jpeg"/>
                    <p>
                        By joining CRISPR/Cas9 with PiggyBac technology, researchers have created Inducedpluripotent
Stem Cells (iPSC) homozygous for the naturally occurring CCR5∆32 variation resistant
to HIV-1 contamination. Nonetheless, attributable to the substantial size of the Cas9
coding arrangement with an aggregate length of more than 5 kb when joining with sgRNA,
promoters and other basic components for efficient expression, delivery of CRISPR/Cas9
parts into essential cells, for example, CD4+T-lymphocytes, the essential focus for HIV-1
disease, remains challenging.
[2]
                    </p>

                    <h4>Design of sgRNA guide sequences</h4>

                    <p>
                        The ORF of HIV-1 coreceptor CCR5 is situated on the fourth or last exon of theCCR5 gene,
which maps to the short arm of chromosome 3 at position 21.31 (3p21.31), with base match
go from 46,370,854 to 46,376,206 of the forward strand. In light of the presence of a PAM
with a 59-NGG seqeunce, a sum of 124 conceivable sgRNAs can be designed to target CCR5
ORF or its correlative strand.
                    </p>
                    <h4>Efficient editing of the CCR5 locus by the RNAguided Cas9 nuclease</h4>
                    <p>
                        sgRNA-guided Cas9 cleaves target DNA at both strands and generates DSBs which com-
monly trigger NHEJ and result in indels (insertions and deletion). To determine the detailed
sequence changes resulting from CRISPR/Cas9-mediated gene editing, we amplified the ge-
nomic segment encompassing the predicted cleavage site and sequenced the amplicons by
deep sequencing. Results demonstrated that CRISPR/Cas9 is an efficient tool to edit the
CCR5 locus.
                    </p>
                </div>
               
                <br />
                <br />
            </div>
        );
    }
}
module.exports = solution2;