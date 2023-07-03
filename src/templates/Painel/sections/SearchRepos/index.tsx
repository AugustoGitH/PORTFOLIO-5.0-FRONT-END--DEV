import { useEffect } from "react"

import useFetchRepos from "@/queries/services/getRepositories"
import useSearchReposStore from "@/stores/project/private/useSearchRepos"

import InputSearch from "./components/InputSearch"
import ListRepos from "./components/ListRepos"
import * as S from "./styles"

const SearchRepos = (): JSX.Element => {
  const { data: repos } = useFetchRepos()
  const setRepos = useSearchReposStore(state => state.setRepos)
  useEffect(() => {
    if (repos) {
      setRepos(repos)
    }
  }, [repos, setRepos])
  return (
    <S.SearchRepos>
      <h4>AugustoGith</h4>
      <h2>Buscar reporitórios no seu Github</h2>
      <InputSearch />
      <ListRepos />
    </S.SearchRepos>
  )
}

export default SearchRepos