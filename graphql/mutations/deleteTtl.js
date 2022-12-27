import {gql} from '@apollo/client'

export const DELETE_TTL = gql `

  mutation DeleteTtl($nit: String!) {
    deleteTtl(nit: $nit){
      legalInfo {
        company_name
      }
    }
  }

`
