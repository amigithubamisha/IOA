import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import TopBar from '../../components/TopBar/TopBar'
import './upcomingevent.css'

const upcomingevent = () => {
  return (
    <>
    <TopBar />
    <NavBar />

    <div class="event">
        <main class="event-grid">
          <article>
            <img className='event-img' src="https://img.freepik.com/free-vector/happy-new-year-2024-celebration-background-with-bursting-star-vector_1017-46980.jpg?w=996&t=st=1703149972~exp=1703150572~hmac=f90c948857881390fd7183d2d390561bfd8756ae1652583d41cdc1d6d5dac03f" alt="New year"/>
            <div class="text">
              <h2 className='title'>New Year</h2>
              <h3 className='title-date'>1st Jan, 2024</h3>
              <p className='title-para'>New Year's Eve is a celebration of endings and beginnings—a time to reflect on the lessons learned, the challenges overcome, and the growth experienced.</p>
            </div>
          </article>
          <article>
            <img className='event-img' src="https://img.freepik.com/free-vector/makar-sankranti-background-with-kites-spool-string_1017-35831.jpg?w=826&t=st=1703150099~exp=1703150699~hmac=7820e8fdb7b202b16cf4db5b35de2934140a37f1de85d4bf73df991967578b61" alt="Makar sankranti"/>
            <div class="text">
              <h2 className='title'>Makara Sankranti</h2>
              <h3 className='title-date'>15th Jan, 2024</h3>
              <p className='title-para'>One of the highlights of Makar Sankranti is the age-old tradition of kite flying. The skies come alive with colorful kites of all shapes and sizes, symbolizing the triumph of light over darkness. </p>
            </div>
          </article>
          <article>
            <img className='event-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Samba_dashami.jpg/1920px-Samba_dashami.jpg" alt="Samba Dashami"/>
            <div class="text">
              <h2 className='title'>Samba Dashami</h2>
              <h3 className='title-date'>20th Jan, 2024</h3>
              <p className='title-para'>Samba Dashami is a traditional Hindu festival celebrated in the state of Odisha, India, particularly by mothers to seek the blessings of Lord Surya (Sun God) for the well-being and long life of their sons.</p>
            </div>
          </article>
          <article>
            <img className='event-img' src="https://img.freepik.com/free-vector/map-india-silhouette-with-indian-flag-republic-day-event_1017-42366.jpg?w=996&t=st=1703150854~exp=1703151454~hmac=79e144f0f4e3d0471dc05913aaa7b8b6601cbb7ec09c30861f19c761c512713f" alt="Republic day"/>
            <div class="text">
              <h2 className='title'>Republic Day</h2>
              <h3 className='title-date'>26th Jan, 2024</h3>
              <p className='title-para'>Republic Day is a momentous occasion that commemorates the day when the Constitution of India came into effect on January 26, 1950.</p>
            </div>
          </article>
        </main>
      </div>
    <Footer />
    </>
  )
}

export default upcomingevent