import AddressForm from "@/components/address-form";


async function handleClick(){
  'use server'
  console.log('Hey')
}


function page() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center opacity-75">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div  className="flex justify-center items-center">
          <form action={handleClick}>
            <input type="text" name="address" placeholder="Unesi tekst" />
          </form>
          <AddressForm />
        </div>

      </main>
    </div>
    )
}

export default page