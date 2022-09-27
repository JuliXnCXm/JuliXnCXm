import React, { useEffect } from 'react'
import '../styles/Portfolio.css'
import Modal from './Modal'
import Data from '../assets/Mock.js'

const Portfolio = () => {
  const [data, setData] = React.useState({})
  const [show , setShow] = React.useState(false)
  const [portfolio, setPortfolio] = React.useState("all")
  const [projectName, setProjectName] = React.useState("")

  let btna = document.getElementById( "btn-prj--all" )
  let btnw = document.getElementById( "btn-prj--web" )
  let btnd = document.getElementById( "btn-prj--data" )
  let btnb = document.getElementById( "btn-prj--blockchain" )
  let btnc = document.getElementById( "btn-prj--cloud" )

  let spanButtons = document.querySelectorAll("span.span--button");

  useEffect( () =>{
    if ( portfolio === "web" )
    {
      setData( Data.portfolio.web )
    }
    if ( portfolio === "data" )
    {
      setData( Data.portfolio.dataScience )
    }
    if ( portfolio === "all" ) {
      setData( Data.portfolio.all )
    }
    if ( portfolio === "cloud" ) {
      setData( Data.portfolio.cloud )
    }
    if ( portfolio === "blockchain" ) {
      setData(Data.portfolio.blockchain);
    }
  }, [ portfolio,spanButtons ] )

  const handleCLick = (project) => {
    setShow(true)
    setProjectName(project)
  }

  const handleClose = () => {
    setShow(false)
  }

  const changePropertes = () => {
    for (let index = 0; index < spanButtons.length; index++) {
      let element = spanButtons[index];
      element.style.fontWeight = "lighter";
    }
  }

  return (
    <div className="hero" id="portfolio">
      <h1>My Projects</h1>
      <div style={{ minHeight: "550px" }}>
        <div className="projects--nav">
          <span
            className="span--button"
            id="btn-prj--all"
            onClick={() => {
              changePropertes();
              setPortfolio("all");
              btna.style.fontWeight = "bold";
              btna.style.fontWeight = "14px";
            }}
          >
            All
          </span>
          <span
            className="span--button"
            id="btn-prj--web"
            onClick={() => {
              changePropertes();
              setPortfolio("web");
              btnw.style.fontWeight = "bold";
            }}
          >
            Web Development
          </span>
          <span
            className="span--button"
            id="btn-prj--data"
            onClick={() => {
              changePropertes();
              setPortfolio("data");
              btnd.style.fontWeight = "bold";
            }}
          >
            Data Science
          </span>
          <span
            className="span--button"
            id="btn-prj--blockchain"
            onClick={() => {
              changePropertes();
              setPortfolio("blockchain");
              btnb.style.fontWeight = "bold";
            }}
          >
            Blockchain
          </span>
          <span
            className="span--button"
            id="btn-prj--cloud"
            onClick={() => {
              changePropertes();
              setPortfolio("cloud");
              btnc.style.fontWeight = "bold";
            }}
          >
            Cloud
          </span>
        </div>
        <div className="projects--images">
          {data !== undefined
            ? Object.getOwnPropertyNames(data).map((project,idx) => {
                return (
                  <>
                    {idx < 6 ?
                    <div
                      className="projects--images__container"
                      onClick={() => handleCLick(project)}
                      key={idx}
                    >
                      <img
                        className="projects--images__container--image"
                        src={
                          process.env.PUBLIC_URL +
                          `/images/${data[project].photo}`
                        }
                        alt={data[project].title}
                      />
                      <div className="detail-project">
                        <p>{data[project].title}</p>
                        <span class="material-icons material-symbols-outlined">
                          search
                        </span>
                      </div>
                    </div>
                    : null }
                  </>
                );
              })
            : null}
        </div>
        <div className='see_all'>
          <span>see all</span>
          <span class="material-icons material-symbols-outlined">
            arrow_forward
          </span>
        </div>
        {show ? (
          <Modal>
            <div className="modal--container__image">
              <span
                class="contact-icon material-icons material-icons-outlined"
                onClick={handleClose}
              >
                close
              </span>
              <h3 className="modal--container__image--title">
                {data[projectName].title}
              </h3>
              <div className="modal--container__image--image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/images/${data[projectName].photo}`
                  }
                  alt={data[projectName].title}
                />
                <p className="modal--container__image--description">
                  {data[projectName].description}
                </p>
              </div>
              <div className="modal--container__image--buttons">
                {data[projectName].link ?
                <button
                  onClick={() => {
                    window.open(data[projectName].link, "_blank");
                  }}
                >
                  Demo
                </button>
                : null}
                <button
                  onClick={() => {
                    window.open(
                      Data.portfolio.all[projectName].github,
                      "_blank"
                    );
                  }}
                >
                  Code
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}

export default Portfolio