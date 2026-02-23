import Card from '@/Components/Card'
import facuties from '@/Data/Faculty.json'
import React from 'react'


async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const faculty = facuties[parseInt(id) - 1];

  return (
    <>
      <div className='p-3 d-flex justify-content-center'>
        <Card
          key={faculty.id}
          id={faculty.id}
          title={faculty.name}
          description={faculty.qualification}
          imageUrl={faculty.img}
        />

      </div>
    </>
  )
}

export default page