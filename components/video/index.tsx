export function Video() {
  return (
    <section className="pt-30">
      <div className="relative overflow-hidden">
        <video className="w-full object-cover" loop autoPlay muted>
          <source src="/videos/landing-1.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Tu navegador no tiene soporte para el Video.
        </video>
        <div className="absolute top-0 left-0 m-4 text-white w-2/5 bg-opacity-50 px-2 py-8 rounded">
          <h1 className="md:text-2xl font-bold text-white">Con más de 20 años de experiencia en telecomunicaciones, tecnología educativa y energías renovables.</h1>
        </div>
        <div className="flex text-end absolute top-0 right-0 m-4 text-white w-1/2 bg-opacity-50 py-4 rounded">
          <h1 className="md:text-6xl font-bold text-white">Ingeniería y Telecomunicaciones</h1>
        </div>
      </div>
    </section>
  )
}
