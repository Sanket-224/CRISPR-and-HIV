import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import s from '../assets/mystyles.css';

class solution1 extends Component {
    render() {
        return (
            <div>
                <h1> CRISPR Solution 1 </h1>
                <hr color="#665451" />
                <br />
                <div class="video-container" id="noob">
                    <iframe width="700" height="500" src="//www.youtube.com/embed/b4jxSNu9oEQ" frameborder="10" allowfullscreen></iframe>
                </div>
                <div>
                    <p>
                        Using the much famous CRISPR/CAS9 gene editing technique, scientist have shown that
they can edit HIV gene sequence from human immune cells and doing so, in that process
can prevent the infection on uninfected cells.
                    </p>
                    <p>
                        CRISPR/CAS9 gene editing technique is going to revolutionise the investigation and treat-
ment of root causes of genetic diseases. It allows the scientist to focus on a specific gene, cut
and paste parts of the DNA to change their functionality.
                    </p>
                    <p>
                        In the past year, scientist have shown how to successfully treat a genetic disease Duchenne
muscular dystrophy using CRISPR/CAS9 in living mammals for the very first time. CRISPR
is showing immense potential as a possible treatment for HIV in the future.
                    </p>

                    <p>
                        The CRISPR/CAS9 technique works by guiding a pair of “molecular scissors” proteins to
targeted sections of DNA within a cell and then asking them to either delete or edit the gene
sequence.
                    </p>
                    <p>
                        CRISPR refers to a specific repeating sequence of DNA extracted from a prokaryote - a
single-celled organism such as bacteria - which pairs up with an RNA-guided enzyme called
Cas9.
                    </p>
                    <p>
                        So what do you do if you want to edit the DNA of a HIV virus within a human cell? All
you need is a bacterium to go in and counter the virus and produce a strand of RNA that
is similar to virtual DNA. The gRNA (guide RNA) will then attach onto the CAS9 enzyme
and together they will search for the matching gene sequence of the HIV virus. Once they
find it, the CAS9 enzyme starts cutting and destroying that gene sequence of the HIV virus
from the human cell.
                    </p>
                    <p>
                        Using the above described method, researchers at Temple University have managed to elim-
inate HIV-1 DNA from the T helper cells genome in labs. It was also found that when these
cells were exposed to HIV-1 virus again these T helper cells were not infected again.
                    </p>
                    <img src="assets/a3.jpg"/>

                    <p>
                        According to a lead researcher Kamel Khalili: “These findings are important on multiple
levels.They demonstrate the effectiveness of our gene editing system in eliminating HIV from
the DNA of CD4 T-cells and, by introducing mutations into the viral genome, permanently
inactivating its replication. They show that the system can protect cells from reinfection
and that the technology is safe for the cells, with no toxic effects.”
                    </p>
                    <p>
                        There are many gene editing techniques trialled in the past but when it comes to HIV, the
scientist are yet to figure out how to prevent further infections, which is crucial to the success
of any treatment that offers better results than anti-retroviral drugs.
                    </p>
                </div>
                
                <br />
                <br />
            </div>
        );
    }
}
module.exports = solution1;