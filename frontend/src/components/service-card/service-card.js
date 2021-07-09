import React from 'react';
import './service-card.scss';
import { useDispatch } from 'react-redux';
import { OPEN_SERVICE_MODAL } from '../../actions/servicesActions';
import Button from '../button/button';
function ServiceCard({ item }) {
  // const currentService = useSelector((state) => state.services);
  const dispatch = useDispatch();

  function openServiceModal() {
    dispatch({ type: OPEN_SERVICE_MODAL, payload: item });
  }
  let decription_limit = 112;

  const description = item?.description.slice(0, decription_limit) + '...';
  console.log(item);
  return (
    <li key={item.id} className="card">
      <div className="card__header">
        <img className="card__image" src={item.imgUrl} alt="lgoo" />
        <span className="card__about">
          <h3 className="card__title">{item.name}</h3>
          <p className="card__category card-p-14-grey">#продуктивность</p>
        </span>
      </div>
      <p className="card__text p-14-normal">{description}</p>
      <div className="card__responsible">
        <p className="card__responsible-person card-p-14-grey-500">
          Ответственный
        </p>
        <div className="card__responsible-contacts">
          <img
            className="card__responsible-person-avatar"
            src={item?.peopleImg}
            alt="avatar"
          />

          <div className="about">
            <div className="person">
              <p className="card__responsible-person-name">
                {item?.people}
              </p>
              <p className="card__responsible-person-name">IT-закупки</p>
            </div>
            <Button onClick={openServiceModal} text={'Подробнее'} size="middle" background={"transperent"} color={"red"} />

          </div>
        </div>
      </div>
    </li>
  );
}

export default ServiceCard;
