import Image from "next/image";
import ColoredIcon from "./components/ColoredIcon";
import CurlAnimation from "./components/CurlAnimation";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <div className="w-full bg-amber-50 overflow-x-hidden wedding-wrapper">
      <MusicPlayer />
      <div className="w-[1440px] h-[7100px] relative bg-amber-50 overflow-hidden mx-auto wedding-container">
        <div className="w-[1440px] h-[1440px] left-0 top-[594px] absolute bg-emerald-950 rounded-full" />
        <div className="w-[1440px] h-[1393px] left-0 top-[1271px] absolute bg-emerald-950" />
        <div className="w-[778px] h-7 left-[331px] top-[2363px] absolute text-center justify-start text-white text-base font-normal font-preahvihear leading-6">
          ver mapa
        </div>

        <CurlAnimation endPageY={4537} />

        <div className="w-[1440px] h-[1412px] left-0 top-[4650px] absolute bg-emerald-950" />

        <Image
          className="absolute left-0 top-[4537px] w-[1440px] h-72 outline outline-1 outline-offset-[-0.50px]"
          src="/grass.png"
          width={1440}
          height={72}
          alt="grass"
        />

        <div className="absolute left-1/2 top-[4957px] z-20 w-[832px] -translate-x-1/2 text-center text-amber-50">
          <h2 className="font-bricolage text-5xl font-bold leading-[76.80px]">
            Notas Importantes
          </h2>
          <p className="mx-auto mt-2 max-w-[640px] font-preahvihear text-base leading-6 text-white">
            • Queremos verte elegante, pero siendo tú. Nuestras sugerencias:
          </p>
          <div
            className="mt-3 flex items-center justify-center gap-3"
            aria-label="Paleta de colores sugerida"
          >
            <span className="size-12 rounded-full bg-[#839958]" />
            <span className="size-12 rounded-full bg-[#5C7350]" />
            <span className="size-12 rounded-full bg-[#8E7AAF]" />
            <span className="size-12 rounded-full bg-[#D0A5F9]" />
          </div>
          <ul className="mx-auto mt-6 w-fit space-y-2 text-center font-preahvihear text-base leading-6 text-white">
            <li>• Este evento es solo para adultos.</li>
            <li>• No habrá mesa de regalos tradicional.</li>
            <li>
              • Estacionamiento dentro del lugar para las personas que lleguen
              temprano :P
            </li>
          </ul>

          <h2 className="mt-14 font-bricolage text-5xl font-bold leading-[76.80px]">
            Hospedaje
          </h2>
          <p className="mt-2 font-preahvihear text-base leading-6 text-white">
            Para quienes vienen de fuera, aquí algunas opciones:
          </p>
          <div className="mt-5 space-y-5">
            <div>
              <p className="font-preahvihear text-base leading-6 text-white">
                Cerca de los novios:
              </p>
              <div className="mt-1 space-y-1 font-preahvihear text-base leading-6">
                <a
                  href="https://www.airbnb.mx/s/Torre%C3%B3n--Coah./homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJkbkDRnDyj4YRsk8eT6FIe2Q&acp_id=d2c481c6-9907-4be8-ac5b-e73afc3c3a5e&date_picker_type=calendar&checkin=2026-10-03&checkout=2026-10-04&adults=2&search_type=user_map_move&query=Torre%C3%B3n%2C%20Coah.&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-07-01&monthly_length=3&monthly_end_date=2026-10-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=1&channel=EXPLORE&ne_lat=25.593240777833035&ne_lng=-103.39706388809606&sw_lat=25.57764309416155&sw_lng=-103.42089384925674&zoom=15.172032991647134&zoom_level=15.172032991647134&search_by_map=true"
                  className="block text-[#D0A5F9] hover:underline"
                  target="_blank"
                >
                  Airbnb
                </a>
                <a
                  href="https://www.google.com/maps/place/Fiesta+Inn+Torre%C3%B3n+Galer%C3%ADas/@25.5818328,-103.4066078,755m/data=!3m2!1e3!5s0x868fdaf5a1c94caf:0x73e875c31ca699ec!4m9!3m8!1s0x868fdb858de1400b:0x39002fd97887b110!5m2!4m1!1i2!8m2!3d25.5818328!4d-103.4040329!16s%2Fg%2F1tjmf2jz?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
                  className="block text-[#D0A5F9] hover:underline"
                  target="_blank"
                >
                  Hotel
                </a>
              </div>
            </div>
            <div>
              <p className="font-preahvihear text-base leading-6 text-white">
                Cerca del lugar:
              </p>
              <div className="mt-1 space-y-1 font-preahvihear text-base leading-6">
                <a
                  href="https://www.airbnb.mx/s/Museo-Arocena--Torre%C3%B3n--Coah./homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJ31sDFmbZj4YR-Gi8_br1qbQ&acp_id=2584c4a4-98bc-4643-8d77-70527cd62042&date_picker_type=calendar&checkin=2026-07-03&checkout=2026-07-05&adults=2&search_type=user_map_move&query=Museo%20Arocena%2C%20Torre%C3%B3n%2C%20Coah.&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-07-01&monthly_length=3&monthly_end_date=2026-10-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=2&channel=EXPLORE&ne_lat=25.545894825474715&ne_lng=-103.44420876329337&sw_lat=25.533599552835383&sw_lng=-103.4629861745729&zoom=15.515811410146176&zoom_level=15.515811410146176&search_by_map=true"
                  className="block text-[#D0A5F9] hover:underline"
                  target="_blank"
                >
                  Airbnb
                </a>
                <a
                  href="https://www.google.com/maps/place/Moka+Boutique+Hotel/@25.5423482,-103.4574853,1511m/data=!3m1!1e3!4m22!1m9!2m8!1shoteles+torreon+centro!5m5!5m4!1s2026-10-02!2i2!4m1!1i2!6e3!3m11!1s0x868fdb4b7506af9d:0xa8bbb0df09afa3b5!5m4!1s2026-10-02!2i2!4m1!1i2!8m2!3d25.5423482!4d-103.4489291!15sChZob3RlbGVzIHRvcnJlb24gY2VudHJvkgEFaG90ZWyqAUwQASoLIgdob3RlbGVzKA4yHxABIhvwRwZshxO4CxUQuUeRR71KRKgPl9AuVsBzgzMyGhACIhZob3RlbGVzIHRvcnJlb24gY2VudHJv4AEA!16s%2Fg%2F11g07snbvd?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
                  className="block text-[#D0A5F9] hover:underline"
                  target="_blank"
                >
                  Hotel
                </a>
              </div>
            </div>
          </div>
          <p className="mt-5 font-preahvihear text-base leading-6 text-white">
            Si necesitas ayuda, estamos a un mensaje de distancia.
          </p>
        </div>

        <div className="absolute left-[-18px] top-[5720px] z-10 h-[1474px] w-[1474px] rounded-full bg-amber-50" />
        <div className="absolute left-[590px] top-[5914px] z-20 text-center font-bricolage text-6xl font-bold text-emerald-950">
          the
        </div>
        <div className="absolute left-[449px] top-[5768px] z-20 h-16 w-[542px] text-center font-bricolage text-6xl font-bold text-emerald-950">
          Come for the
        </div>
        <div className="absolute left-[707px] top-[5891px] z-20 text-center font-reenie text-9xl font-medium text-emerald-950">
          love.
        </div>
        <div className="absolute left-[482px] top-[5810px] z-20 text-center font-reenie text-9xl font-medium text-emerald-950">
          party,
        </div>
        <div className="absolute left-[712px] top-[5833px] z-20 text-center font-bricolage text-6xl font-bold text-emerald-950">
          stay for{" "}
        </div>
        <Image
          className="absolute left-[111px] top-[5983px] z-20 h-[1080px] w-[1080px]"
          src="/novios.gif"
          width={1080}
          height={1080}
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
        <div className="w-96 h-7 left-[523px] top-[3424px] absolute text-center justify-start text-emerald-950 text-base font-normal font-preahvihear leading-6">
          mismo lugar, a las 00:00 hrs
        </div>
        <div className="left-[592px] top-[3191px] absolute text-center justify-start text-emerald-950 text-5xl font-bold font-bricolage leading-[76.80px]">
          Ceremonia
        </div>
        <div className="left-1/2 top-[3510px] absolute z-10 w-[1000px] -translate-x-1/2 drop-shadow-[0_16px_40px_rgba(10,51,35,0.15)]">
          <div className="relative w-full">
            <Image
              className="h-auto w-full mix-blend-screen"
              src="/fotos.png"
              width={1000}
              height={1000}
              alt="Fotos de Oscar y Katy"
            />
            <ColoredIcon
              src="/heart.png"
              className="right-[70px] top-[110px] z-20 h-28 w-28"
            />
            <ColoredIcon
              src="/heart2.png"
              className="right-[70px] top-[250px] z-20 h-12 w-16"
            />
            <ColoredIcon
              src="/heart3.png"
              className="bottom-[290px] left-[70px] z-20 h-[73px] w-[75px] origin-top-left rotate-[25deg]"
            />
            <ColoredIcon
              src="/heart3.png"
              className="bottom-[95px] left-[70px] z-20 h-[118px] w-[77px] origin-top-left"
            />
          </div>
        </div>

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
        <div className="w-[927px] h-20 left-[256px] top-[3280px] absolute text-center justify-start text-black text-base font-normal font-preahvihear leading-6">
          Rompe hielos y ceremonia civil en la terraza del museo, hora 6:30 pm. 
        </div>
      </div>
    </div>
  );
}
