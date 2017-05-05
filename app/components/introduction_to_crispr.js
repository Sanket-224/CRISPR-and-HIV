import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import s from '../assets/mystyles.css';

class introduction_to_crispr extends Component {
    render() {
        return (
            <div>
                <h1> CRISPR </h1>
                <hr color="#665451" />
                <br />
             <div class="video-container" id="noob">
                    <iframe width="700" height="500" src="//www.youtube.com/embed/0LSnQukLmM4" frameborder="10" allowfullscreen></iframe>
                </div>
                <div>
                    <p>
                        The discovery of clustered DNA repeats began independently in three parts of the world.
                    </p>

                    <p>
                       The first description of what might later be called CRISPR was from Osaka University
specialist Yoshizumi Ishino in 1987, who inadvertently cloned some portion of a CRISPR
together with the iap gene, the target of interest. The association of the repeats was irregular
in light of the fact that repeated successions are ordinarily arranged successively along DNA.
The capacity of the interupted with bunched repeats was not known at the time.
                    </p>
                        
                    <p>
                        In 1993 analysts of Mycobacterium tuberculosis in the Netherlands published two articles
about a bunch of intruded on direct repeats (DR) in this bacterium. These researchers perceived the assorted qualities of the DR-interceding arrangements among various strains of
M. tuberculosis and utilized this property to plan a writing strategy that was named Spoligotyping, which is still being used today.             
                    </p>

                    <p>
                       In the meantime, repeats were seen in the archaeal living beings Haloferax and Haloarcula
species, and their functions was studied by Francisco Mojica at the University of Alicante in
Spain. Despite the fact that his theory ended up being incorrect, Mojica inferred at the time
that the clustered repeats had a part in accurately isolating duplicated DNA into daughter
cells amid cell division since plasmids and chromosomes with indistinguishable repeats clusters couldn't exist together in Haloferax volcanii. transcription of the interfered with repeats
was likewise noted for the first time. By 2000, Mojica's gathering had recognized interrupted
repeats in 20 species of microbes. In 2001, Mojica and Ruud Jansen, who was looking for
additional repeats, proposed the acronym CRISPR (Clustered Regularly Interspaced Short
Palindromic Repeats) to reduce the perplexity originating from the various acronyms used
to depict the groupings in the scientific literature.
                    </p>

                   
                    <img src="assets/index.jpg"/>

                    <p>
                        <b>Figure 1:</b> Simplified diagram of a CRISPR locus. The three major components of a CRISPR
locus are shown: cas genes, a leader sequence, and a repeat-spacer array. Repeats are shown
as gray boxes and spacers are colored bars. The arrangement of the three components is not
always as shown. In addition, several CRISPRs with similar sequences can be present
in a single genome, only one of which is associated with cas genes.)
                    </p>

                    <h4> Mechanism </h4>
                    <p>
                        CRISPR-Cas immunity is a characteristic procedure of microscopic organisms and archaea.
CRISPR-Cas counteracts bacteriophage disease, conjugation and common change by corrupting remote nucleic acids that enter the cell.
                    </p>

                    <h4> Spacer acquisition </h4>

                    <p>
                       When a microorganism is attacked by an infection, the primary phase of the safe reaction is
to catch viral DNA and embed it into a CRISPR locus as a spacer. Cas1 and Cas2 are found
in every one of the three sorts of CRISPR-Cas immune system, which demonstrates that
they are included in spacer acquisition. Mutation studies affirmed this theory, demonstrating that evacuation of Cas1 or Cas2 ceased spacer securing, without in
uencing CRISPR
immune response.
                    </p>
                    <p>
                        Diffierent Cas1 proteins have been portrayed and their structures resolved. Cas1 proteins
have diverse amino acid sequences. Nonetheless, their precious crystal structures are comparative and all ppurified Cas1 proteins are metal-dependent nucleases/integrases that bind
to DNA in an arrangement free manner. Representative Cas2 proteins have been described
and have either (single strand) ssRNA or (twofold strand) dsDNA particular endoribonuclease action.
                    </p>
                    <p>
                        In the I-E system of E. coli Cas1 and Cas2 frame a comlex where a Cas2 dimer bridges
two Cas1 dimers. In this complex Cas2 plays out a non-enzymatic platform role, restricting
twofold stranded pieces of attacking DNA, while Cas1 ties the single-stranded 
anks of the
DNA and catalyzes their integration into CRISPR arrays.
                    </p>
                    

                   <img src="assets/a.png" height="800px" width="800px"/>
                    <p>
                        <b>Figure 2:</b> The stages of CRISPR immunity for each of the three major types of adaptive
immunity. (1) Acquisition begins by recognition of invading DNA by Cas1 and Cas2 and
cleavage of a protospacer. (2) The protospacer is ligated to the direct repeat adjacent to
the leader sequence and (3) single strand extension repairs the CRISPR and duplicates the
direct repeat. The crRNA processing and interference stages occur differently in each of the
three major CRISPR systems. (4) The primary CRISPR transcript is cleaved by cas genes
to produce crRNAs. (5) In type I systems Cas6e/Cas6f cleave at the junction of ssRNA and
dsRNA formed by hairpin loops in the direct repeat. Type II systems use a trans-activating
(tracr) RNA to form dsRNA, which is cleaved by Cas9 and RNaseIII. Type III systems
use a Cas6 homolog that does not require hairpin loops in the direct repeat for cleavage.
(6) In type II and type III systems secondary trimming is performed at either the 5’ or 3’
end to produce mature crRNAs. (7) Mature crRNAs associate with Cas proteins to form
interference complexes. (8) In type I and type II systems, interactions between the protein
and PAM sequence are required for degradation of invading DNA. Type III systems do
not require a PAM for successful degradation and in type III-A systems basepairing occurs
between the crRNA and mRNA rather than the DNA, targeted by type III-B systems.)
                    </p>

                    <h4>Protospacer adjacent motifs</h4>
                    <p>
                        Bioinformatic investigation of regions of phage genomes that were extracted as spacers
(named protospacers) uncovered that they were not randomly chosen but rather were discovered neighboring short (3 { 5 bp) DNA groupings named protospacer adjoining mtifs (PAM).
Investigation of CRISPR-Cas systems showed PAMs to be imperative for type I and type II,
yet not type III system during acquisition. In type I and type II system, protospacers are
extracted at positions nearby a PAM seqeunce, with the other side of the spacer cut utilizing
a ruler mechanism, along these lines keeping up the normality of the spacer estimate in the
CRISPR array. The protection of the PAM arrangement varies between CRISPR-Cas system
and appears, by all accounts, to be evolutionarily connected to Cas1 and the leader sequence.
                    </p>
                    <p>
                            New spacers are added to a CRISPR array in a directional manner, occurring preferentially,
yet not exclusivvely, adjacent to the leader sequence. Examination of the type I-E frame-
work from E. coli exhibited that the main direct repeat neighboring the leader sequeunce, is
replicated, with the recently obtained spacer embedded between the rst and second direct
repeats.
                    </p>
                    <p>
                       The PAM sequence has all the earmarks of being critical during spacer addition in type I-E
system. That sequence contains an strongly moderated nal nucleotide (nt) adjoining the
primary nt of the protospacer. This nt turns into the nal base in the main direct repeat.
This suggest that the spacer securing mechanism creates single-stranded overhangs in the
second-to-last position of the immediate repeat and in the PAM dur spacer inclusion. In any
case, not all CRISPR-Cas system seem to share this component as PAMs dierent organism
don't demonstrate a similar level of preservation in the last position. It is likely that in those
system, a blunt end is produced at the very end of the immediate repeat and the protospacer
amid acquisition.
                    </p>
                    
                    <h4>
                        Insertion variants
                    </h4>
                    <p>
                        Investigation of Sulfolobus solfataricus CRISPRs uncovered further complexities to the accepted model of spacer inclusion, as one of its six CRISPR loci inserted new spacers randomlythroughout its CRISPR array, rather than embeddings nearest to the leader sequence.
                    </p>
                    <p>
                       Diffierent CRISPRs contain numerous spacers to a similar phage. The mechanism that causes
this phenomenon was found in the type I-E arrangement of E. coli. A critical improvement in
spacer securing was recognized where spacers as of now focus on the phage, even mismatches
to the protospacer. This "priming" requires the Cas proteins required in both acquisition
and interference to interact with each other. Recently gained spacers that result from the
preparing mechanism are constantly found on an same strand from the priming spacer. This
perception prompted the speculation that the aquisition machinery slides along the foreign
DNA after to priming to locate another protospacer.
                    </p>
                    
                    <h4>
                        Biogenesis
                    </h4>
                    <p>
                        CRISPR-RNA (crRNA), which later aides the Cas nuclease to the target during the interference step, must be created from the CRISPR seuquence. The crRNA is at first deciphered
as a major aspect of a single long transcript incorporating a great part of the CRISPR array.
This transcript is then cleaved by Cas proteins to shape crRNAs. The component to create crRNAs varies among CRISPR-Cas systems. In type I-E and type I-F frameworks, the
proteins Cas6e and Cas6f repectively, perceive stem-loops made by the blending of identical
repeats that 
ank the crRNA. These Cas proteins cleave the more drawn out transcript at
the edge of the combined region, leaving a single crRNA alongside a little remainder of the
matched repeat region.
                    </p>
                    <p>
                        Type III systems likewise utilize Cas6, however their repeats don't create stem-loops. Cleavage rather happens by the more extended transcript wrapping around the Cas6 to permit
cleavage only upstream of the repeat sequence.
                    </p>
                    <p>
                        Type II systems do not have the Cas6 quality and rather use RNaseIII for cleavage. Functional type II systems encode an additional little RNA that is integral to the repeat seqeunce,
known as a trans-initiating crRNA (tracrRNA). Transcription of the tracrRNA and the essential CRISPR transcript brings about base matching and the development of dsRNA at
the repeat sequence, which is in this manner focused by RNaseIII to deliver crRNAs. Not
at all like the other two systems the crRNA does not contain the full spacer, which is rather
truncated at one end.
                    </p>
                    <p>
                        CrRNAs connect with Cas proteins to shape ribonucleotide complexes that perceive remote nucleic acids. CrRNAs demonstrate no inclination between the coding and non-coding
strands, which is characteristic of a RNA-guided DNA-targeting on system. The type I-E
complex (commonly referred to as Cascade) requires five Cas proteins build to a single crRNA.
                    </p>
                    
                    
                    <h4> Interference </h4>
          
                    <p>
                        Amid the interference stage in type I systems the PAM seqeunce is perceived on the crRNA-
complementary strand and is required alongside crRNA toughening. In type I systems rectify
base pairing between the crRNA and the protospacer signals a conformational change in Cas-
cade that recruits Cas3 for DNA degradation.
                    </p>
                    <p>
                        Type II systems depend on a solitary multifunctional protein, Cas9, for the impedance step.
Cas9 requires both the crRNA and the tracrRNA to work and cleaves DNA utilizing its dual
HNH and RuvC/RNaseH-like endonuclease domains. Basepairing between the PAM and the
phage genome is required in type II systems. Be that as it may, the PAM is perceived on an
same strand from the crRNA (the opposite strand to type I systems).
                    </p>
                    <p>
                        Type III systems, similar to type I require six or seven Cas proteins vinding to crRNAs. The
type III systems investigated from S. solfataricus and P. furiosus both focus on the mRNA
of phages as opposed to phage DNA genome, which may make these systems interestingly
fit for focusing on RNA-based phage genomes.
                    </p>
                    <p>
                        The mecahnism for separating self from outside DNA during obstruction is incorporated with
the crRNAs and is consequently likely regular to each of the three systems. All through the
unmistakable development procedure of each significant type, all crRNAs contain a spacer
sequence and some segment of the repeat at one or both ends. It is the incomplete repeat
sequence that keeps the CRISPR-Cas framework from focusing on the chromosome as base
pairing beyond the spacer grouping signals self and avoids DNA cleavage. RNA-guided
CRISPR enzymes are named type V restriction enzymes.
                    </p>
                   
                </div>
               
                <br />
                <br />
            </div>
        );
    }
}
module.exports = introduction_to_crispr;
