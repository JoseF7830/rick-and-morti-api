<script setup lang="ts">
type character = {
    character:{
        name: string;
        image: string;
        status: string;
        id: string;
        species: string;
        location: {
            name: string
        }
    }
}
const route = useRoute()

const query = gql`
    query getCharacter {
  character(id: ${route.params.id}) {
      name
      image
    	status
     	id
      species
      location{
        name
      }
    }
  }
  `
  
  const { data, error } = await useAsyncQuery<character>(query)

</script>

<template>
    <CharacterCard 
        :name="data!.character.name"
        :image="data!.character.image"
        :status="data!.character.status"
        :species="data!.character.species"
        :location="data!.character.location.name"
        :id="data!.character.id"
      />
</template>