import React from 'react'
import Advogado from '../Fotos/advogado.jpg'
import Direito2 from "../Fotos/direito2.jpg"

class Body extends React.Component {
    render() {
        return(
        <div className="bodyDiv">

            <div className="container my-5">
            <div class="row align-items-center py-1 my-0 my-md-5 m-1">
                <img className="col-10 offset-1 offset-md-0 col-md-4 img-fluid img-thumbnail" alt="imagemAdvogado" src={Advogado}></img>
                <div class="w-100 d-block d-md-none mb-4"></div>
                <div className="col-12 col-md-8 text-justify">
                O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                </div>
            </div>

            <div class="row align-items-center py-1 m-1">
            <div className="col-12 col-md-8 order-2 order-md-1 text-justify">
                O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                </div>
                <div class="w-100 d-block d-md-none"></div>
                <img className="col-10 offset-1 offset-md-0 col-md-4 img-fluid order-1 order-md-2 img-thumbnail" alt="imagemAdvogado" src={Direito2}></img>
            </div>
            </div>
            
            <hr></hr>

            <div className="container my-5">
            <div class="row align-items-center py-1">
            <div className="col-5 col-md-3 display-5 text-center">CARREIRA</div>
            <div className="col-7 col-md-9 text-justify">
                O <mark>Lorem Ipsum</mark> é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                </div>
            </div>
            </div>

            <hr></hr>

            <div className="container my-5">
            <div class="row align-items-center py-1">
            <div className="col-5 col-md-3 display-5 text-center order-1 order-md-2">DIFERENCIAIS</div>
            <div className="col-7 col-md-9 text-justify order-2 order-md-1">
                O <mark>Lorem Ipsum</mark> é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                </div>
            </div>
            </div>

        </div>
        )
    }
}

export default Body