<template>
    <div class="flex flex-wrap">
      <CharacterCard 
        v-for="{ id, name, image, status, species, location} in data?.characters.results"
        :key="id"
        :name="name"
        :image="image"
        :status="status"
        :species="species"
        :location="location.name"
        :id="id"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  
  
  type CharectersResults = {
    characters: {
      results: {
        id: string,
        name: string,
        image: string,
        status: string,
        species: string,
        location: {
          name: string
        }
      } []
    }
  }
  
  const query = gql`
    query getCharacters {
      characters {
        results {
          id
          name
          image
          status 
          species
          location {
            name
          }
        }
      }
    }
  `
  
  const { data } = await useAsyncQuery<CharectersResults>(query)
  </script>
  