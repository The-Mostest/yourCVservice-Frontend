import { useCallback, useEffect } from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons.jsx'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'

import { indexInterview } from '../../services/interviewServices.js'

const EmblaCarousel = (props) => {



  const { options, setInterviews, interviews } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  useEffect(() => {
    const fetchInterviews = async () => {
        try {
            const { data } = await indexInterview()
            setInterviews(data)


        } catch (e) {
            console.log(e)
        }
    }
    fetchInterviews()
}, [])



  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          {props.interviews.map((e) => {
            return (
              <div className="embla__slide" key={e.id}>
                  <Link to={`/jobinterview/${e.id}/`}>
                <div className="embla__slide__number">

                    <h5>
                      {e.applying_role}
                    </h5>
                  <h6>
                    {e.company}
                    <br />
                    £{e.salary}
                    <br />
                    {e.interviewer_name}
                    <br />
                    {new Date(e.date).toLocaleDateString()} @ {new Date(e.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </h6>
                </div>
                  </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>

  )
}

export default EmblaCarousel
