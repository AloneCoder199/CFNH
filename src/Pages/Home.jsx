import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.png';
import { Button } from './src/components/ui/button';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MissionSection from './Mission';
import EmotionalSection from './Emotional';
import DonationOptions from './DonationOption';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
 const urduTexts = [
  "ہماری چھوٹی سی مدد، کسی کی پوری زندگی بدل سکتی ہے۔ آئیں ہم سب مل کر، بھوک، غربت اور تنہائی کو ختم کرنے کا عہد کریں۔",
  "A small act of kindness can change someone's entire life. Let's unite to end hunger, poverty, and loneliness.",
  
  "محبت کی طاقت سے ہر مشکل کو آسان بنایا جا سکتا ہے۔",
  "The power of love can make every hardship easier.",
  
  "خود کو بدلیں، دنیا خود بخود بدل جائے گی۔",
  "Change yourself, and the world will follow.",
  
  "اپنی سوچ کو بڑا کریں، کیونکہ سوچ کی پرواز ہی انسان کو بلندیوں پر لے جاتی ہے۔",
  "Broaden your mindset, because it's your thoughts that lift you to greatness.",
  
  "مشکل وقت میں حوصلہ دینا سب سے بڑی انسانیت ہے، کیونکہ یہی اصل ساتھ ہوتا ہے۔",
  "Offering courage in hard times is the truest form of humanity — that's real support.",
  
  "علم وہ خزانہ ہے جو بانٹنے سے کم نہیں ہوتا، بلکہ بڑھتا جاتا ہے۔",
  "Knowledge is a treasure that grows by sharing, not diminishes.",
  
  "خود کو پہچانیے، کیونکہ اندر چھپی طاقتیں آپ کو حیران کر سکتی ہیں۔",
  "Know yourself, for the hidden powers within you can amaze you.",
  
  "جو دوسروں کے لیے آسانیاں پیدا کرتا ہے، اُس کی زندگی میں سکون خود آتا ہے۔",
  "Those who ease the path for others find peace themselves.",
  
  "محنت کبھی ضائع نہیں جاتی، کامیابی بس صبر کا امتحان لیتی ہے۔",
  "Hard work never goes in vain — success just tests your patience.",
  
  "ہر دن ایک نیا موقع ہے، ماضی کو معاف کریں اور آگے بڑھیں۔",
  "Every day is a new opportunity — forgive the past and move forward.",
  
  "نیت صاف ہو تو راستے خود بخود آسان ہو جاتے ہیں۔",
  "With pure intentions, the path becomes easier on its own.",
  
  "احساس کسی چیز کا محتاج نہیں، بس دل زندہ ہونا چاہیے۔",
  "Empathy needs no resources, only a living heart.",
  
  "سچائی وہ آئینہ ہے جس میں ہر انسان اپنا اصل چہرہ دیکھ سکتا ہے۔",
  "Truth is the mirror where every soul sees its real reflection."
];


  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
 const navigate = useNavigate();
   useEffect(() => {
    let charIndex = 0;
    let text = urduTexts[index];
    let newText = '';

    const typingInterval = setInterval(() => {
      newText += text.charAt(charIndex);
      setCurrentText(newText);
      charIndex++;

      if (charIndex === text.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % urduTexts.length);
        }, 2500); // Delay before switching to next sentence
      }
    }, 70); // Typing speed

    return () => clearInterval(typingInterval);
  }, [index]);
  return (
    
    <>
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-br from-blue-500 via-white to-blue-300   overflow-hidden mb-10 md:pl-0 pl-8 pr-8 md:pr-0">
      {/* BACKGROUND TEXT */}
<div className="inset-0 flex flex-col ">
     <div className='releative top-0 left-0 w-full h-full'>
 <h2 className="relative md:left-60 md:-top-30 text-[80px] sm:text-[150px] md:text-[200px] lg:text-[150px] font-black bg-gradient-to-r from-green-300 via-blue-500 to-red-500 bg-clip-text text-transparent animate-glow top-11 left-10">
                ہمــــــدردی
              </h2>
            
  {/* Foreground English Text */}
 <h1
  className="absolute z-10 md:text-5xl text-3xl font-extrabold text-center 
             text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-black to-blue-300  
              top-10 left-1/2 transform -translate-x-1/2 md:top-20 w-11/12 md:w-2/3 
             drop-shadow-md animate-fadeIn "
>
  Compassion for Nature and Humanity
</h1>

     </div>

    <div className='flex md:flex-row gap-10 justify-center items-center  flex-col-reverse  md:relative md:bottom-25 '>
      <div className="w-full md:w-1/2 space-y-6 z-10">
        <h1 className=" md:text-5xl text-2xl font-bold leading-snug pt-10 md:pt-0 relative bottom-20 md:bottom-0 text-center ">
          Let’s Be Their Light – <br /> Together We Can Change Lives
        </h1>
        <div className='tracking-widest urdu-glow h-10 gap-1 relative bottom-20 md:bottom-0 text-center'>
           {currentText}
        </div>
         <div className="flex gap-4 mt-10 relative bottom-15 md:bottom-0 left-10">
      <Button variant="primary" onClick={() => navigate('/donate')} className='cursor-pointer'>Donate Now</Button>
      <Button variant="secondary" onClick={() => navigate('/Missionpage')} className='cursor-pointer'>Our Mission</Button>
    </div>
      </div>
      <div className="w-full md:w-1/2 relative flex justify-center z-10">
        <img
          src={hero}
          alt="Helping Image"
          className="max-w-md md:max-w-lg drop-shadow-2xl"
        />
      </div>
    </div>
      </div>
    </section>

    </>
  );
};



const HomePage = () => {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <MissionSection/>
      <EmotionalSection/>
      <DonationOptions/>
      {/* Remaining sections like Counter, Volunteer, Testimonial, Gallery, and Footer will be added next */}
      <Footer/>
    </main>
  );
};

export default HomePage;
