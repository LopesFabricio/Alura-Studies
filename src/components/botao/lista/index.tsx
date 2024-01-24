import { Itarefa } from "../../../types/tarefas";
import style from "./Lista.module.scss";
import Item from "./item";

interface Props {
  tarefas: Itarefa[];
  selecionaTarefa: (taerafaselecionada: Itarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item {...item} selecionaTarefa={selecionaTarefa} key={item.id} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
