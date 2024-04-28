export const RenderHeader = () => {

     return (
          <div className="header">
               <div className="logo">
                    <img onClick={ () => { window.location.href="https://www.youtube.com/@kodiecode"} } src="/ncfi-logo.png" alt="Kodie"/>
               </div>
               <h1>NCF Research Nexus</h1>
          </div>
     )
}