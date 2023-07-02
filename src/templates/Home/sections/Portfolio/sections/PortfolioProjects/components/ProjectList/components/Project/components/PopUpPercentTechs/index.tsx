

import techsWhiteListIcon from "@/settings/techsWhiteListIcon"
import treatingTechsToShowPercentage from "@/utils/treatingTechsToShowPercentage"

import * as S from "./styles"
import { type IPopUpPercentTechsProps, type IBarTechnologieProps } from "./types"


const BarTechnologie = ({ tech, percent, order, listIcons }: IBarTechnologieProps): JSX.Element => {
  return (
    <S.BarTechnologie order={order} percent={percent} tech={tech}>
      <div className="icon-tech">
        {listIcons.find((techList) => techList.tech === tech)?.icon}
      </div>
      <div className="bar-percent-container">
        <div className="bar-percent-content">
          <span className="percent-tech">{`${percent}%`}</span>
        </div>
      </div>
    </S.BarTechnologie>
  )
}


const PopUpPercentTechs = ({ percents, technologies, show, onClose }: IPopUpPercentTechsProps): JSX.Element => {
  const tratedPercentsDecimalToPercentage = treatingTechsToShowPercentage(percents, technologies)


  return show ? (
    <S.PopUpPercentTechs>
      <div className="card">
        {
          tratedPercentsDecimalToPercentage ? (
            <>
              <ul className="statistic-percentages-techs">
                {
                  Object.entries(tratedPercentsDecimalToPercentage).map(([tech, percent], index) => (
                    <BarTechnologie key={`${tech}-percentage`} tech={tech} listIcons={techsWhiteListIcon} order={index} percent={percent} />
                  ))
                }
              </ul>
            </>
          ) : (
            <span className="message-not-percent-techs">Este projeto não há indices de tecnologias mais usadas</span>
          )
        }
        <button className="btn-close" onClick={onClose}><i className='bx bx-x' ></i></button>
      </div>
    </S.PopUpPercentTechs>
  ) : <></>
}


export default PopUpPercentTechs