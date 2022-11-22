import pdfMaker from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
function vendaPDF(vendas){
    pdfMaker.vfs = pdfFonts.pdfMake.vfs;

    const relatorioTitulo = [
        {
            text: 'Relatório sobre todas as vendas',
            fontSize: 15,
            bold: true,
            alignment: 'center',
            margin: [15, 20, 0, 45]
        }
    ];

    const dados = vendas.map((venda)=>{
        return [
            {text: venda.id_venda, alignment:'center', fontSize: 9, margin: [0, 2, 0, 2]},
            {text: venda.data, alignment:'center', fontSize: 9, margin: [0, 2, 0, 2]},
            {text: venda.valortotal, alignment:'center', fontSize: 9, margin: [0, 2, 0, 2]},
            {text: venda.usuario, alignment:'center', fontSize: 9, margin: [0, 2, 0, 2]},
            {text: venda.cliente, alignment:'center', fontSize: 9, margin: [0, 2, 0, 2]},
        ]
    });

    const detalhes = [{
        table:{
            headerRows: 1,
            widths:['*', '*', '*', '*', '*',],
            body: [
                [
                    {text:'ID', style:'tableHeader', alignment:'center', fontSize: 10},
                    {text:'Data', style:'tableHeader', alignment:'center', fontSize: 10},
                    {text:'Valor Total', style:'tableHeader', alignment:'center', fontSize: 10},
                    {text:'Usuario', style:'tableHeader', alignment:'center', fontSize: 10},
                    {text:'Cliente', style:'tableHeader', alignment:'center', fontSize: 10},
                ],
                ...dados
                
            ],
        },
        layout: 'lightHorizontalLines'
    }];

    function Rodape(currentPage, pageCount){
        return[{
            text: currentPage + ' de ' + pageCount, 
            fontSize: 9,
            alignment: 'center',
            margin: [0, 10, 20, 0]
        }]
    }

    const docDefinicoes = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [relatorioTitulo],
        content: [detalhes],
        footer: Rodape
    };

    pdfMaker.createPdf(docDefinicoes).open();
}
export default vendaPDF;