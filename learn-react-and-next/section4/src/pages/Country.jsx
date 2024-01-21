import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../api';
import style from './Country.module.css';

function Country() {
  const params = useParams();
  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountry(params.code);
    return setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  if (!country) {
    return <div>Loading ....</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji}&nbsp; {country.commonName}
        </div>
        <div className={style.officialName}>{country.officialName}</div>
      </div>
      <img
        src={country.flagImg}
        alt={`${country.commonName}의 국기 이미지입니다.`}
      />
      <div className={style.body}>
        <div>
          <b>코드 : </b>{country.code}&nbsp;
        </div>
        <div>
          <b>수도 : </b>{country.capital.join(', ')}&nbsp;
        </div>
        <div>
          <b>지역 : </b>&nbsp;{country.region}
        </div>
        <div>
          <b>지도 : </b>&nbsp;
          <a target="_blank" href={country.googleMapURL} rel="noreferrer">
            {country.googleMapURL}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Country;
