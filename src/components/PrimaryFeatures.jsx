import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import integration from '@/images/screenshots/integration.webp'
import interests from '@/images/screenshots/interests.webp'
import inclusion from '@/images/screenshots/inclusion.webp'
import guarantees from '@/images/screenshots/guarantees.webp'

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <div className="bg-gray-800 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base/7 font-semibold text-teal-400">Reduce el riesgo</h2>
          <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Contratos de credito &ne; Contratos comerciales
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="flex p-px lg:col-span-4">
              <div className="w-full overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <Image
                  alt="Reporting"
                  src={integration}
                  className="h-80 w-full object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-cyan-400">Reporta a tus clientes</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Integra el Comportamiento de Pago a SICs</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  Ayuda a tus clientes a construir su historial crediticio mientras reduces el riesgo en tus operaciones.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="w-full overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
              <Image
                  alt="Interests"
                  src={interests}
                  className="h-80 w-full object-cover object-center"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-cyan-400">Aumenta tus ganancias</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Cobra Intereses Ordinarios y Moratorios</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Genera ingresos adicionales aplicando intereses ordinarios y moratorios que optimizan tus retornos.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem] w-full">
              <Image
                  alt="Garantees"
                  src={guarantees}
                  width={640}
                  height={320}
                  className="h-80 w-full object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-cyan-400">Mejora tus garantías</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Refuerza la Seguridad de tus Contratos</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Protege cada operación con contratos diseñados para asegurar el cumplimiento y garantizar el flujo de efectivo.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-4">
              <div className="w-full overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <Image
                  alt="Inclusion"
                  src={inclusion}
                  className="h-80 w-full object-cover object-center"
                />
                <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-cyan-400">Créditos Accesibles para Todos</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">Impulsa la Inclusión Financiera</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Abre nuevas oportunidades con productos de crédito flexibles que llegan a una amplia gama de perfiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
