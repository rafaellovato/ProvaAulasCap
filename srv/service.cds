using aulas from '../db/schema';

service AulasBP{

    entity Cadastro as projection on aulas.Cadastro;

    function RequisicaoCadastro(ID : Integer) returns array of Cadastro;

}