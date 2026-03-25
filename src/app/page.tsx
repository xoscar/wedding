import Image from "next/image";
import CurlAnimation from "./components/CurlAnimation";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <div className="w-full bg-amber-50 overflow-x-hidden wedding-wrapper">
      <MusicPlayer />
      <div className="w-[1440px] h-[6770px] relative bg-amber-50 overflow-hidden mx-auto wedding-container">
        <div className="w-[1440px] h-[1440px] left-0 top-[594px] absolute bg-emerald-950 rounded-full" />
        <div className="w-[1440px] h-[1393px] left-0 top-[1271px] absolute bg-emerald-950" />
        <div className="w-[778px] h-7 left-[331px] top-[2363px] absolute text-center justify-start text-white text-base font-normal font-preahvihear leading-6">
          ver mapa
        </div>
        <div className="w-[1440px] h-[1412px] left-0 top-[4650px] absolute bg-emerald-950" />

        <Image
          className="w-[1440px] h-72 left-0 top-[4537px] absolute outline outline-1 outline-offset-[-0.50px]"
          src="/grass.png"
          width={1440}
          height={72}
          alt="grass"
        />

        <CurlAnimation />

        <div className="w-[1474px] h-[1474px] left-[-18px] top-[5446px] absolute bg-amber-50 rounded-full" />
        <div className="left-[505px] top-[4957px] absolute text-center justify-start text-amber-50 text-5xl font-bold font-bricolage leading-[76.80px]">
          Notas Importantes
        </div>
        <div className="left-[601px] top-[5146px] absolute text-center justify-start text-amber-50 text-5xl font-bold font-bricolage leading-[76.80px]">
          Hospedaje
        </div>
        <div className="w-[832px] h-28 left-[310px] top-[5239px] absolute text-center justify-start text-white text-base font-normal font-preahvihear leading-6">
          Para quienes vienen de fuera, aquí algunas opciones:
          <br />
          Cerca de los novios: Cerca del lugar: Si necesitas ayuda, estamos a un
          mensaje de distancia.
        </div>
        <div className="left-[590px] top-[5734px] absolute text-center justify-start text-emerald-950 text-6xl font-bold font-bricolage">
          the
        </div>
        <div className="w-[542px] h-16 left-[449px] top-[5588px] absolute text-center justify-start text-emerald-950 text-6xl font-bold font-bricolage">
          Come for the
        </div>
        <div className="left-[707px] top-[5711px] absolute text-center justify-start text-emerald-950 text-9xl font-medium font-reenie">
          love.
        </div>
        <div className="left-[482px] top-[5630px] absolute text-center justify-start text-emerald-950 text-9xl font-medium font-reenie">
          party,
        </div>
        <div className="left-[712px] top-[5653px] absolute text-center justify-start text-emerald-950 text-6xl font-bold font-bricolage">
          stay for{" "}
        </div>
        <Image
          className="w-[1289.33px] h-[967px] left-[111px] top-[5803px] absolute"
          src="/novios.png"
          width={1289}
          height={967}
          alt="novios"
        />
        <div className="w-[1332px] h-20 left-[221px] top-[-232px] absolute text-center justify-start text-black text-4xl font-normal font-preahvihear">
          welcome to the
        </div>
        <Image
          className="w-[1892px] h-[1403px] left-0 top-[100px] absolute origin-top-left"
          src="/envelop.png"
          width={1892}
          height={1403}
          alt="envelope"
        />
        <div className="w-[475.24px] h-40 left-[469px] top-[697.59px] absolute origin-top-left rotate-[-8.42deg] text-center justify-start text-black text-base font-normal font-poppins leading-6">
          Más que una boda, es una reunion íntima y muy especial para celebrar
          el amor, la amistad y todas las historias que nos trajeron hasta aquí.
          <br />
          <br />
          Queremos que estés presente, risas, buena música y mucha complicidad
          (;
        </div>
        <div className="w-[1005px] h-20 left-[182px] top-[644.16px] absolute origin-top-left rotate-[-8.42deg] text-center justify-start text-black text-5xl font-semibold font-bricolage leading-[76.80px]">
          The secret party
        </div>
        <div className="w-[778px] h-7 left-[331px] top-[2158px] absolute text-center justify-start text-white text-base font-normal font-preahvihear leading-6">
          Museo Arocena, av. Juarez 1249, Centro Histórico, 27000 Torreón, Coah.
        </div>
        <div className="left-[685px] top-[2767px] absolute text-center justify-start text-black text-4xl font-normal font-preahvihear">
          When?
        </div>
        <div className="left-[525px] top-[2060px] absolute text-center justify-start text-amber-50 text-5xl font-bold font-bricolage leading-[76.80px]">
          Un rincón bonito
        </div>
        <Image
          className="w-[1440px] left-0 top-[2196px] absolute"
          src="/museum2.png"
          width={1440}
          height={283}
          alt="museum2"
        />

        <Image
          className="w-[1440px] left-0 top-[2696.59px] absolute"
          src="/museum3.png"
          width={1440}
          height={283}
          alt="museum3"
        />
        <div className="w-80 h-20 left-[557px] top-[1469px] absolute text-center justify-start text-amber-50 text-5xl font-bold font-bricolage leading-[76.80px]">
          Aparta el día
        </div>
        <div className="left-[602px] top-[1815px] absolute text-center justify-start text-amber-50 text-4xl font-normal font-preahvihear leading-[54.40px]">
          Hora 8:00 pm
        </div>
        <div className="w-[543px] h-149 left-[448px] top-[1649px] absolute">
          <Image
            className="w-[543px] top-[2196.59px]"
            src="/calendar.png"
            width={543}
            height={149}
            alt="calendar"
          />
        </div>
        <div className="w-52 h-14 left-[614px] top-[1578px] absolute text-center justify-start text-amber-50 text-4xl font-normal font-preahvihear leading-[54.40px]">
          Octubre
        </div>
        <div className="w-[1006px] h-28 left-[208px] top-[4756px] absolute text-center justify-start text-amber-50 text-base font-normal font-preahvihear leading-6">
          Queremos verte elegante, pero siendo tú. (El blanco ya está ocupado :p
          )
          <br />
          Este evento es solo para adultos.
          <br />
          No habrá mesa de regalos tradicional.
          <br />
          Estacionamiento dentro del lugar para las personas que lleguen
          temprano :P
        </div>
        <div className="w-96 h-7 left-[523px] top-[3424px] absolute text-center justify-start text-emerald-950 text-base font-normal font-preahvihear leading-6">
          mismo lugar, a las 00:00 hrs
        </div>
        <div className="left-[592px] top-[3191px] absolute text-center justify-start text-emerald-950 text-5xl font-bold font-bricolage leading-[76.80px]">
          Ceremonia
        </div>
        <Image
          className="w-[523.33px] h-[594.34px] left-[440px] top-[3627px] absolute outline outline-[24px] outline-offset-[-12px]"
          src="/cover.png"
          width={508}
          height={594}
          alt="cover"
        />

        <Image
          className="w-28 h-28 left-[911px] top-[3586.17px] absolute"
          src="/heart.png"
          width={114}
          height={106}
          alt="heart"
        />
        <Image
          className="w-16 h-12 left-[815px] top-[3586.17px] absolute"
          src="/heart2.png"
          width={60}
          height={51}
          alt="heart2"
        />

        <Image
          className="w-[75px] h-[73px] left-[500px] top-[4090px] absolute origin-top-left rotate-[25deg]"
          src="/heart3.png"
          width={75}
          height={73}
          alt="heart3"
        />

        <Image
          className="w-[77px] h-[118px] left-[417px] top-[4163px] absolute origin-top-left"
          src="/heart3.png"
          width={77}
          height={118}
          alt="heart3"
        />

        <div className="w-16 h-16 left-[190px] top-[2431px] absolute" />
        <Image
          className="w-[104px] h-[117px] left-[146px] top-[1085.45px] absolute"
          src="/star1.png"
          width={104}
          height={117}
          alt="star1"
        />
        <Image
          className="w-[62px] h-[56px] left-[230px] top-[1165.91px] absolute"
          src="/star2.png"
          width={62}
          height={56}
          alt="star2"
        />
        <Image
          className="w-[103px] h-[118px] left-[1186.89px] top-[1585.33px] absolute origin-top-left"
          src="/star3.png"
          width={103}
          height={118}
          alt="star3"
        />
        <Image
          className="w-[61px] h-[56px] left-[1255px] top-[1677.92px] absolute origin-top-left"
          src="/star4.png"
          width={61}
          height={56}
          alt="star4"
        />
        <div className="w-[927px] h-20 left-[256px] top-[3316px] absolute text-center justify-start text-black text-base font-normal font-preahvihear leading-6">
          wkabhksbdhjksacvjdcgjsfvfdgsvfgdsfvdsghvhakgvfchgsvcjgv
          ghsdvcgvhgdsvgvcfgdvghdvscgvgdvghvgvgvgvghkvvhgvadsghvfgfv.
        </div>
      </div>
    </div>
  );
}
