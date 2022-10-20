import { gql } from '@apollo/client'

export const ADD_INSTALLER_DATA = gql`

  mutation AddInstallerInfo($installer: InstallerInfo) {
    addInstallerInfo(installer: $installer){
      legalInfo{
        nit
      }
    }
  }
`