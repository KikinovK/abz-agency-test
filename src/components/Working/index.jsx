import { useEffect, useState } from 'react';

import Container from 'src/components/ui/Container';
import Button from 'src/components/ui/Button';
import TitleSection from 'src/components/ui/TitleSection';

import Card from '../Card';
import Preloader from '../Preloader';

import { BASE_URL } from 'src/constants';

import styles from './Working.module.scss';

const Working = ({ isUpload }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [count] = useState(6);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}users?page=${page}&count=${count}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setTotalPages(result.total_pages);

      if (page > 1) {
        setData([...data, ...result.users]);
        return
      }

      setData(result.users);

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, isUpload]);

  useEffect(() => {
    setPage(1);
  },[isUpload])

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <section className={styles.working}>
      <Container>
        <TitleSection  mods={['modMargin2']}>Working with GET request</TitleSection>
        {loading && <Preloader />}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && (
          <ul className={styles.working__list}>
            {data.map(item => (
              <li key={item.id} className={styles.working__item}>
                <Card {...item} />
              </li>
            ))}
          </ul>
        )}
        <div className={styles.working__button_wrap} >
          <Button
            type="button"
            mods={['modColorPrime', 'modeSize']}
            onClick={loadMore}
            style={totalPages === page ? {display: 'none'} : {}}
          >
            Show more
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Working;
