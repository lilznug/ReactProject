import Card from './Card.jsx'
import Image1 from '/1667485764269.jpg'

const isi = [
    {id: 1, name: 'Universitas Indonesia', data: 'lorememmmemememememmemeem', 
     image: 'https://upload.wikimedia.org/wikipedia/id/thumb/0/0f/Makara_of_Universitas_Indonesia.svg/1200px-Makara_of_Universitas_Indonesia.svg.png',
     link: 'https://www.google.com/search?q=gambar+ui&oq=gambar+ui&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCTM5MjJqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8#vhid=fO3atnnybBSyvM&vssid=l' },
    {id: 2, name: 'Nugroho Ulil', data: 'lorememmmemememememmemeem', image: Image1 },
    {id: 3, name: 'Nugroho Ulil', data: 'lorememmmemememememmemeem', image: Image1 },
    {id: 4, name: 'Nugroho Ulil', data: 'lorememmmemememememmemeem', image: Image1 },
    {id: 5, name: 'oke', data: 'ipsummmmmmmmmmmmm', image: Image1},
]

const Porto = () =>{
    
    return(
        <div className='w-auto h-auto mx-5 mt-10'>
            <h1 className='text-red-500'>hello world</h1>
            <div className="grid grid-cols-4 gap-4">
            {
                isi.map((isi) => {
                    return (
                        
                        <Card key={isi.id} name={isi.name} data ={isi.data} img={isi.image}  link={isi.link}/>
       
                    )
                }
                
                )
            }
            </div>
        </div>
    )
}
export default Porto;