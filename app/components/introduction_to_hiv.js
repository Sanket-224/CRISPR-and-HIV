import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import s from '../assets/mystyles.css';

class introduction_to_hiv extends Component {
    render() {
        return (
            <div>
                <h1> HIV </h1>
                <hr color="#665451" />
                <br />
                <div class="video-container" id="noob">
                    <iframe width="700" height="500" src="//www.youtube.com/embed/qjUnnmuOrvM" frameborder="10" allowfullscreen></iframe>
                </div>
                <div>
                    <p class="flow-text">
                        HIV stands for human immunodeficiency virus. HIV is not a disease , it is virus whose
infection causes the immune system of human body to become weak and over the time
acquire AIDS(acquired immunodeficiency syndrome) . Infection with HIV occurs by the
transfer of blood, semen, vaginal fluid, pre-ejaculate, or breast milk. HIV infects essential
cells in the human immune system like helper T cells ( CD4+ T cells), macrophages, and
dendritic cells.When the level of CD4+ T cell falls below a critical level,immunity through
cells is lost and body becomes more susceptible to opportunistic infections.
                    </p>
                    <h4> Structure of HIV </h4>

                   <img src="assets/a1(1).png"/>



                    <p class="flow-text">
                        HIV has two copies of positive single-stranded RNA enclosed by a conical capsid composed
of two thousand copies of the viral protein p24.These single stranded RNAs are responsible
for coding the virus’s 9 genes. The single-stranded RNA is tightly bound to nucleocapsid
proteins, p7, and enzymes which are needed for the development of the virion such as reverse
transcriptase, proteases, ribonuclease and integrase. This is surrounded by the viral envelope,
which is composed of the lipid bilayer taken from the membrane of a human cell when the
newly formed virus particle buds from the cell. The viral envelope contains proteins from
the host cell and relatively few copies of the HIV Envelope protein, which consists of a cap
made of three molecules known as glycoprotein (gp) 120, and a stem consisting of three gp41
molecules which anchor the structure into the viral envelope. The Envelope protein, encoded
by the HIV env gene, allows the virus to attach to target cells and fuse the viral envelope
with the target cell membrane releasing the viral contents into the cell and initiating the
infectious cycle. As the sole viral protein on the surface of the virus, the Envelope protein is
a major target for HIV vaccine efforts.Over half of the mass of the trimeric envelope spike is
N-linked glycans. The density is high as the glycans shield the underlying viral protein from
neutralisation by antibodies. The unusual processing and high density means that almost
all broadly neutralising antibodies that have so far been identified bind to or, are adapted
to cope with, these envelope glycans.
                    </p>
                    <h4> HIV Life Cycle </h4>
                    <img src="assets/a2(1).jpg"/>
                    <p>
                        The seven steps of HIV life cycle are:
                        <ol>
                            <li>Binding</li>
                            <li>Fusion</li>
                            <li>Reverse transcription</li>
                            <li>Integration</li>
                            <li>Replication</li>
                            <li>Assembly</li>
                            <li>Budding</li>
                        </ol>
                    </p>
                    <p>
                        The first thing that HIV does is attack CD4+ T cells. When it attacks the CD4+ T cells
HIV attaches itself to the molecules on the surface of the CD4 cell. After HIV attaches
itself to a host CD4 cell, the HIV viral envelope fuses with the CD4 cell membrane. Fusion
allows HIV to enter the CD4 cell. Once inside the CD4 cell, the virus releases HIV RNA
and HIV enzymes, such as reverse transcriptase and integrase.Once inside a CD4 cell, HIV
releases and uses reverse transcriptase (an HIV enzyme) to convert its genetic material - HIV
RNA into HIV DNA. The conversion of HIV RNA to HIV DNA allows HIV to enter the
CD4 cell nucleus and combine with the cell’s genetic material - cell DNA. Once inside the
host CD4 cell nucleus, HIV releases integrase, an HIV enzyme. HIV uses integrase to insert
(integrate) its viral DNA into the DNA of the host cell.Once HIV is integrated into the host
CD4 cell DNA, the virus begins to use the machinery of the CD4 cell to create long chains
of HIV proteins. The protein chains are the building blocks for more HIV.During assembly,
new HIV RNA and HIV proteins made by the host CD4 cell move to the surface of the cell
and assemble into immature (noninfectious) HIV.During budding, immature (noninfectious)
HIV pushes itself out of the host CD4 cell. (Noninfectious HIV can’t infect another CD4
cell.) Once outside the CD4 cell, the new HIV releases protease, an HIV enzyme. Protease
acts to break up the long protein chains that form the noninfectious virus. The smaller HIV
proteins combine to form mature, infectious HIV.
                </p>

                </div>
                <br />
                <br />
            </div>
        );
    }
}
module.exports = introduction_to_hiv;