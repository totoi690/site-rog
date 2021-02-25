import React from 'react'


class Header extends React.Component {
    render() {
        return(
            <div className="bg-dark">
    <div class="thumbnail">
        <div class="img-fluid lowOpacity bg">
        </div>
        <div class="caption text-center">
            <h1 className="display-1 textTitulo">Rogério de Mello</h1>
            <p className="display-6"><span className="px-5 textSubtitulo">ADVOCACIA</span></p>
            <p className="textLead">Há xx anos fazendo justiça</p>
        </div>
    </div>
    </div>
        )
    }
}

export default Header