export default function header() {
  return (
    <div>
      <header className="flex justify-between w-full px-12 border-b py-4">
        <h1 className="text-2xl">Champs Firm</h1>
        <ul className="flex gap-6">
          <li className="hover:bg-neutral-500">Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
    </header>
    </div>
  )
}
