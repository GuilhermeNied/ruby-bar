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
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div>{item}</div>
        ) : (
          <div
            style={{
              background: active ? '#eee' : 'transparent'
            }}
          >
            {item.name}
          </div>
        )
      }
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
      perform: () => (window.location.pathname = 'contact')
    }
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="z-30 bg-secondary/60 backdrop-blur-md backdrop-filter">
          <KBarAnimator className="mx-auto w-[32rem] overflow-hidden rounded-xl border-[1px] border-tertiary bg-secondary/60 px-4 drop-shadow-2xl ">
            <div className="mx-2 flex items-end justify-between py-4">
              <KBarSearch className="w-full rounded-md border-b border-none border-gray-300 bg-transparent pt-2 text-gray-100 outline-none" />
            </div>

            <RenderResults />
            <div className="h-4" />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <main className="flex h-screen items-center justify-center">
        <span className="font-bold text-white">Ctrl + K</span>
      </main>
    </KBarProvider>
  )
}

export default App
