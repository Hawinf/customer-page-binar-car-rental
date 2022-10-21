import { useState } from 'react';
import './faq.css';


const FaqSection = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }


    return (
        <div className="faq-section" id='faq'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="faq-kiri">
                        <h1>Frequently Asked Question</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="faq-kanan">

                       
                        <div className='accordion'>
                            
                            {data.map((item, i) => ( 
                                <div className='item'>
                                    <div className='title' onClick={() => toggle(i)}>
                                        <h2>{item.question}</h2>
                                        <span>{selected === i ? '-' : '+'}</span>
                                    </div>
                                    <div className={selected === i ? 'content show' : 'content'}>
                                        {item.answer}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const data = [
    {
        question: 'Apa saja yang dibutuhkan?',
        answer: 'lorem ipsum dollar ammet'
    },
    {
        question: 'Berapa hari minimal sewa mobil lepas kunci?',
        answer: 'lorem ipsum dollar ammet'
    },
    {
        question: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
        answer: 'lorem ipsum dollar ammet'
    },
    {
        question: 'Apakah Ada biaya antar-jemput?',
        answer: 'lorem ipsum dollar ammet'
    },
    {
        question: 'Bagaimana jika terjadi kecelakaan',
        answer: 'lorem ipsum dollar ammet'
    }
]

export default FaqSection