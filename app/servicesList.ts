import { ServiceProps } from "./sections/Service";

const servicesList: ServiceProps[] = [
  {
    serviceId: "portaria",
    type: "secondary",
    title: "Portaria Remota",
    breafing: "Ideal para condomínio residenciais, corporativos, pequenas, médias e grandes empresas.",
    description: "Proporciona segurança monitorada para acesso inteligente através de um atendimento humanizado e capacitado. A sưa operação é realizada através da nossa central de monitoramento 24 horas, esponsável pelo contato com os condôminos para autorização ou não do acesso de visitantes e ou entregadores. Todo procedimento é monitorado por um sistema de imagens a alarmes que de forma integrada atuam promovendo maior segurança e intervenções rápidas quando necessário.",
    serviceList: [
      {
        icon: "/icons/money_cost.png",
        title: "Menor custo de mão de obra"
      },
      {
        icon: "/icons/security_maintenance.png",
        title: "Manutenção da Segurança"
      },
      {
        icon: "/icons/time_agility.png",
        title: "Agilidade, Proteção e Eficiência"
      },
      {
        icon: "/icons/inteligence_white.png",
        title: "Inteligência Tecnológica"
      }
    ],
    bgImage: "/images/portaria-bg.png",
    showConsult: true,
    showBadge: true
  },
  {
    serviceId: "video-monitoramento",
    type: "primary",
    title: "Video Monitoramento",
    breafing: "Recomendado para utilização em condomínios, residências, empresas e indústrias dos mais diferentes segmentos e grandes eventos.",
    description: "O nosso servico de video monitoramento é realizado através de câmeras com alta resolução e softwares de tecnologia de ponta que contribuem para aumentar de forma significativa a segurança dos ambientes e procedimentos operacionais. As imagens captadas em tempo real são enviadas para nossa central de monitoramento e no primeiro sinal de alerta nossos analistas avaliam a movimentação conforme os protocolos de segurança. Sendo necessário, enviam sinais de alerta ao cliente e a depender da ocorrência acionam as equipes defensivas e autoridades de segurança.",
    serviceList: [
      {
        icon: "/icons/man_running.png",
        title: "Ação em tempo real"
      },
      {
        icon: "/icons/phone_lock.png",
        title: "Antecipação de ocorrências"
      },
      {
        icon: "/icons/camera.png",
        title: "Verificação de segurança"
      },
      {
        icon: "/icons/officer.png",
        title: "Efetividade contra invasão ou tentativa de Roubo"
      },
      {
        icon: "/icons/inteligence_red.png",
        title: "Inteligência Tecnológica"
      }
    ],
    showBadge: true
  },
  {
    serviceId: "alarme",
    type: "primary",
    title: "Alarme e Monitoramento",
    breafing: "Ideal para condomínio residenciais, corporativos, pequenas, médias e grandes empresas.",
    description: "O sistema de alarme opera de forma integrada com sistema de monitoramento de imagens. Assim, qualquer evento de invasão no ambiente ativa o sistema de alarme na nossa central 24 horas. A seguir as imagens em tempo real são verificadas pelos analistas e adotados os protocolos de segurança para agilidade no atendimento da ocorrência. Sendo necessário aciona imediatamente os serviços de emergência e ou as autoridades policiais.",
    serviceList: [
      {
        icon: "/icons/officer.png",
        title: "Efetividade contra invasão ou tentativa de Roubo"
      },
      {
        icon: "/icons/man_running.png",
        title: "Ação em tempo real"
      },
      {
        icon: "/icons/metodologia_white.png",
        title: "Pronta Resposta"
      },
      {
        icon: "/icons/inteligence_red.png",
        title: "Inteligência Tecnológica"
      }
    ],
    showConsult: true
  }

];

export default servicesList;
