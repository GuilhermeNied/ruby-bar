import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches
} from 'kbar'

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => (
        <div className="flex items-center h-auto gap-5 max-w-fit">
          <span className="text-md w-full px-2 rounded-lg hover:bg-zinc-200 p-5">
            {item.name}
          </span>
        </div>
      )}
    />
  )
}

function App() {
  const actions = [
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['b'],
      keywords: 'writing words',
      perform: () => (window.location.pathname = 'blog')
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: ['c'],
      keywords: 'email',
      perform: () => (window.location.pathname = 'contact') // Pra mudar o redirecionamento
    }
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal className="">
        <KBarPositioner className="h-auto z-30 bg-gray-200/10 backdrop-blur-md backdrop-filter">
          <KBarAnimator className="h-auto mx-auto w-[32rem] overflow-hidden rounded-xl border bg-white px-4 drop-shadow-2xl ">
            <div className="mx-2 flex items-end justify-between py-4">
              <KBarSearch className="w-full border rounded-md px-3 py-2 border-zinc-400 bg-transparent pt-2 text-black outline-none" />
            </div>

            <RenderResults />
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
