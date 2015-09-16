app.controller('AlertDemoCtrl', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});


app.controller('CadastroApontamentoController', function($scope){

	$scope.projetos = [
 		{id: 1, nome: 'Appointment'},
 		{id: 2, nome: 'Inframérica'},
 		{id: 3, nome: 'Portal BIM'},
 		{id: 4, nome: 'Payment'},
 		{id: 5, nome: 'BIMStract'}
 	];
 	
 	$scope.atividades = [
 		{id: 1, nome: 'Levantamento de requisitos'},
 		{id: 2, nome: 'Arquitetura'},
 		{id: 3, nome: 'Programação'},
 		{id: 4, nome: 'Teste'},
 		{id: 5, nome: 'Suporte'}
 	];

	$scope.listagemApontamentos = [
 		{id: 0, data: new Date(), horarioInicial: new Date(), horarioFinal: new Date(), totalHoras: new Date(), projeto: {id:0,nome:'Appointment'}, atividade: {id:0, nome:'Programação'}, descricao: 'Implementação da camada web utilizando angular JS, depois fiz o mapeamento das entidades projeto, apontamento, usuario, entre outras. Após isso escrevi os casos de usos necessários.', status: 'APROVADO'},
 		{id: 1, data: new Date(), horarioInicial: new Date(), horarioFinal: new Date(), totalHoras: new Date(), projeto: {id:0,nome:'Appointment'}, atividade: {id:0, nome:'Programação'}, descricao: 'Implementação da camada web utilizando angular JS, depois fiz o mapeamento das entidades projeto, apontamento, usuario, entre outras. Após isso escrevi os casos de usos necessários.', status: 'NAO_AVALIADO'}
 	];	

	$scope.salvar = function(){
		if($scope.indexEdicao != ""){
			$scope.listagemApontamentos[$scope.indexEdicao] = $scope.apontamentoEdicao;
		}else{
			$scope.listagemApontamentos.push($scope.apontamentoEdicao);
		}
		
		prepararNovoApontamento();
	}
	
	$scope.alterar = function(index){
		$scope.indexEdicao = index;
		$scope.apontamentoEdicao = $scope.listagemApontamentos[index];
	}
	
	$scope.remover = function(index){
		$scope.listagemApontamentos.splice(index, 1);
	}
	
	$scope.novo = function(){
		prepararNovoApontamento();
	}
	
	$scope.cancelar = function(){
		prepararNovoApontamento();
	}
	
	prepararNovoApontamento = function(){
		$scope.indexEdicao = "";
		$scope.apontamentoEdicao = {};
		$scope.apontamentoEdicao.data = new Date();
		$scope.apontamentoEdicao.horarioInicial = new Date();
		$scope.apontamentoEdicao.horarioFinal = new Date();
		$scope.apontamentoEdicao.totalHoras = new Date();
		$scope.apontamentoEdicao.status = 'NAO_AVALIADO';
	}
	
	prepararNovoApontamento();
	
	
});