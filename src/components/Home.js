import React from 'react';
import "../css/styles.css"

export default function Home() {
    return(
        <div className="contenedor-home">

                    <main className="contenedor-main">
                        <header className="contenedor-home--header px-4">
                            <div className=".container-texto ">
                                <div className="text-center">
                                    <h1 className="text-white"> Bienvenio al Sistema de Apoyo a TIS</h1>
                                    <p className="text-white-50">Universidad Mayor de San Simon-Facultad de Ciencias y Tecnologia</p>
                                </div>
                         </div>
                        </header>

                     <div className="contenedor-publicacion px-4">
                         <h2 className="publicacion">Publicaciones</h2>

                         <hr className="mt-0 mb-4" />

        
                         <h2 className="publicacion">Avisos</h2>
                         <hr className="mt-0 mb-4" />


                     </div>
                    </main>
                    <footer class="contenedor-footer footer-admin mt-auto footer-light">
                        <div class="container-xl px-4">
                            <div class="row">
                            <div class="col-md-6 small">Contactos:</div>
                             
                            </div>
                        </div>
                     </footer>
        </div>
    )
}