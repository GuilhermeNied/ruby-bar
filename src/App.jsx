import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches
} from 'kbar'
import { Search } from 'lucide-react'
import { useState } from 'react'

function RenderResults() {
  const { results } = useMatches()
  return (
    <div>
      {results.map((item, index) => (
        <div
          key={index}
          className="flex flex-col h-auto border-b border-b-zinc-300"
        >
          <span className="text-md w-full">{item.name}</span>
          <div>
            {item.references.map((reference, index) => (
              <a
                className="text-[0.8rem] text-blue-400 hover:text-blue-600"
                key={index}
                href={`https://${reference.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {reference.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function App() {
  const answers = {
    answers: [
      {
        content: {
          data: 'blba'
        },
        references: [
          {
            link: 'ubots.com.br',
            title: 'UBOTS FAQ'
          }
        ]
      }
    ]
  }

  const actions = answers.answers.map(answer => {
    return {
      id: answer.content.data,
      name: answer.content.data,
      keydwords: answer.content.data,
      references: answer.references
    }
  })

  let searchTime = undefined

  const debounce = () => {
    if (searchTime) {
      clearTimeout(searchTime)
    }
    searchTime = setTimeout(() => {
      console.log('Teste')
    }, 500)
  }

  return (
    <KBarProvider actions={actions}>
      <KBarPortal className="">
        <KBarPositioner className="h-auto z-30 bg-gray-200/10 backdrop-blur-md backdrop-filter">
          <KBarAnimator className="flex flex-col gap-3  mx-auto w-[32rem] overflow-hidden rounded-xl border bg-white drop-shadow-2xl">
            <div>
              <div className="w-full py-5 mb-3 bg-zinc-100" />
              <div className="px-5">
                <div className="flex items-center justify-between border rounded-md px-3 py-2">
                  <KBarSearch
                    defaultPlaceholder="Escreva aqui a sua dúvida"
                    className="w-full  border-zinc-400 bg-transparent  text-black outline-none"
                    onKeyDown={debounce}
                  />
                  <span>
                    <Search
                      size={20}
                      strokeWidth={4}
                      className="text-zinc-400 font-bold"
                    />
                  </span>
                </div>
                <div>
                  <RenderResults />
                </div>
              </div>
            </div>
            <div className="h-4" />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <main className="flex bg-zinc-200 h-screen items-center justify-center">
        <span className="font-medium text-black">Ctrl + K</span>
      </main>
    </KBarProvider>
  )
}

export default App
