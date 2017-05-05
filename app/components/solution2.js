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
                <div>
                    <p>
                        This solution comes from the understanding of how HIV interacts with our cells. HIV, sim-
ilarly to other viruses, can’t make new copies of itself without help. HIV must enter cells
and use their machinery to reproduce and spread throughout the body. However HIV can
only enter certain cells. HIV finds the right cell using special proteins called receptors.
                    </p>
                    <p>
                        This arrangement originates from the comprehension of how HIV communicates with our
cells. HIV, comparably to different infections, can’t make new duplicates of itself without
offer assistance. HIV must enter cells and utilize their hardware to imitate and spread all
through the body. However HIV can just enter certain cells. HIV finds the correct cell
utilizing extraordinary proteins called receptors.
                    </p>

                    <p>
                        Receptors sit on the outside of cells to receive messages and transmit them into the cell.
HIV grabs onto cells that have a receptor called CD4. Cells with the CD4 receptor are an
important part of the body’s immune system. HIV slowly destroys these cells and weakens
the immune system (Fig 3).
                    </p>
                    <p>
                        Receptors sit on the outside of cells to get messages and transmit them into the cell. HIV
takes hold of cells that have a receptor called CD4. Cells with the CD4 receptor are a vital
piece of the body’s resistant framework. HIV gradually decimates these cells and debilitates
the insusceptible framework (Fig 3).
                    </p>
                    <img src="assets/HIVTcells(1).png"/>
                    <p>
                        <b>Figure 3:</b> The HIV virus attacks T-helper cells, or CD4+ cells, by fitting itself into the cell
like a key in a lock. Once it has invaded, it can use its own RNA as a template to make
copies of itself, multiplying and traveling through the body. This process destroys the body’s
own T cells over time
                    </p>
                    <p>
                        It turns out that only CD4 is not enough to get infected with HIV. Another protein called
CCR5 is also needed. CCR is called a co-receptor because it works with CD4, is responsible
to allow HIV to enter the cell. Many prople are resistant to HIV due to a mutation in the
CCR5 gene called CCR5 ∆32 . This CCR5 ∆32 mutation results in a smaller protein that is no
longer on the outside of the cell. Now most forms of HIV is no longer able to infect cells
since there is no CCR5 on the surface (Fig 4).
                    </p>
                        
                    <p>
                        Although, CCR5 is not the complete story of immunity to HIV infection. Some people with
no CCR5 ∆32 mutation have also shown resistance. So other genes also contribute to slowing
down of HIV infection.[1]
                    </p>
                    <p>
                     The solution is to inhibit HIV infection of CD4 + T-cells by gene editing of CCR5 using
adenovirus-delivered CRISPR/Cas9. By simple delivery of two essential components, an
optimized Cas9 protein and a single-guided RNA (sgRNA), the CRISPR/Cas9 complex
formed can be programmed to target any genome. With the specificity is determined by the
sgRNA that contains a 20 nt guide sequence complementary to the target genome. With
the guidance of sgRNA, Cas9 protein that is programmed, cleaves the targeted DNA at
each strand, which results in a double-stranded breaks (DSBs) that trigger cellular repair
mechanisms. In eukaryotes, the DSBs are more commonly repaired by the mechanism of
error-prone non-homologous end joining (NHEJ), therefore generating sequence changes, for
instance insertions and deletions (indels).
                    </p>
                    <p>
                        Things being what they are just CD4 is insufficient to get contaminated with HIV. Another
protein called CCR5 is likewise required. CCR is known as a co-receptor since it works with
CD4, is dependable to enable HIV to enter the cell. Numerous prople are impervious to HIV
because of a transformation in the CCR5 quality called CCR5 ∆32 . This CCR5 ∆32 change
brings about a littler protein that is no longer on the outside of the phone. Presently most
types of HIV is no longer ready to taint cells since there is no CCR5 at first glance (Fig 4).
                    </p>
                    <p>
                        In spite of the fact that, CCR5 is not the total story of invulnerability to HIV contamination.
A few people with no CCR5 ∆32 change have likewise demonstrated resistance. So different
qualities additionally add to backing off of HIV infection.[1]
                    </p>
                    <p>
                        The arrangement is to repress HIV contamination of CD4 + T-cells by quality altering of
CCR5 utilizing adenovirus-conveyed CRISPR/Cas9. By basic conveyance of two fundamen-
tal parts, an enhanced Cas9 protein and a solitary guided RNA (sgRNA), the
CRISPR/Cas9 complex framed can be modified to focus on any genome. With the speci-
ficity is controlled by the sgRNA that contains a 20 nt direct arrangement correlative to the
objective genome. With the direction of sgRNA, Cas9 protein that is customized, severs the
focused on DNA at each strand, which brings about a twofold stranded breaks (DSBs) that
trigger cell repair components. In eukaryotes, the DSBs are all the more usually repaired
by the component of mistake inclined non-homologous end joining (NHEJ), consequently
creating grouping changes, for example inclusions and cancellations (indels).
                    </p>
                    <img src="assets/HIVTcells2(1).jpeg"/>
                    <p>
                        By combining CRISPR/Cas9 with PiggyBac technology, researches have generated induced-
pluripotent stem cells (iPSC) homozygous for the naturally occurring CCR5 ∆32 variant resis-
tant to HIV-1 infection. However, owing to the large size of the Cas9 coding sequence with a
total length of more than 5 kb when combining with sgRNA, promoters and other essential
elements for efficient expression, delivery of CRISPR/Cas9 components into primary cells,
for instance, CD4 + T-lymphocytes, the primary target for HIV-1 infection, remains challeng-
ing.
[2]
                    </p>
                    <p>
                        By joining CRISPR/Cas9 with PiggyBac innovation, looks into have created inducedpluripo-
tent foundational microorganisms (iPSC) homozygous for the normally happening CCR5 ∆32
variation impervious to HIV-1 contamination. Nonetheless, attributable to the substantial
size of the Cas9 coding arrangement with an aggregate length of more than 5 kb when joining
with sgRNA, promoters and other basic components for productive expression, conveyance
of CRISPR/Cas9 parts into essential cells, for example, CD4 + T-lymphocytes, the essential
focus for HIV-1 disease, remains challenging.
[2]
                    </p>
                    <h4>Design of sgRNA guide sequences</h4>

                    <p>
                        The ORF of HIV-1 coreceptor CCR5 is located on the fourth or last exon of theCCR5 gene,
which maps to the short arm of chromosome 3 at position 21.31 (3p21.31), with base pair
range from 46,370,854 to 46,376,206 of the forward strand. Based on the presence of a PAM
with a 59-NGG sequence, a total of 124 possible sgRNAs can be designed to target CCR5
ORF or its complementary strand.
                    </p>
                    <p>
                        The ORF of HIV-1 coreceptor CCR5 is situated on the fourth or last exon of theCCR5
quality, which maps to the short arm of chromosome 3 at position 21.31 (3p21.31), with
base match go from 46,370,854 to 46,376,206 of the forward strand. In light of the nearness
of a PAM with a 59-NGG grouping, a sum of 124 conceivable sgRNAs can be intended to
target CCR5 ORF or its correlative strand.
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
                    <p>
                        sgRNA-guided Cas9 cleaves target DNA at both strands and generates DSBs which com-
monly trigger NHEJ and result in indels (insertions and deletion). To determine the detailed
sequence changes resulting from CRISPR/Cas9-mediated gene editing, we amplified the ge-
nomic segment encompassing the predicted cleavage site and sequenced the amplicons by
deep sequencing. Results demonstrated that CRISPR/Cas9 is an efficient tool to edit the
CCR5 locus.
                    </p>
                </div>
                <div class="video-container" id="noob">
                    <iframe width="700" height="500" src="//www.youtube.com/embed/A98MkcZORFU" frameborder="10" allowfullscreen></iframe>
                </div>
                <br />
                <br />
            </div>
        );
    }
}
module.exports = solution2;